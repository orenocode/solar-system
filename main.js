import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

// internal import
import './style.css';
import { earth } from "./planets/earth";
import { addStars } from "./planets/star";
import { moon } from "./planets/moon";

const FIELD_OF_VIEW = 75; 
const ASPECT_RATIO = window.innerWidth / window.innerHeight;

export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, ASPECT_RATIO, 5, 1000);

export const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({
  color: 0xFFF000,
});

// LIGHTS
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)
const ambientLight = new THREE.AmbientLight(0xffffff)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(50, 5)

const controls = new OrbitControls(camera, renderer.domElement) 

// GROUP Object
const group = new THREE.Group()
group.add(pointLight, ambientLight)
// group.add(lightHelper, gridHelper)
group.add(earth)

Array(200).fill().forEach(addStars)
scene.add(group)
function animate() {
  requestAnimationFrame(animate)
  earth.rotation.y += 0.001
  moon.rotation.y += 0.001
  controls.update()
  renderer.render(scene, camera);
}

animate()