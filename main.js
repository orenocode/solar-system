import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

// internal import
import './style.css';
import { earth } from "./planets/earth";
import { moon } from "./planets/moon";

const FIELD_OF_VIEW = 75; 
const ASPECT_RATIO = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, ASPECT_RATIO, 5, 1000);

const renderer = new THREE.WebGLRenderer({
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
group.add(lightHelper, gridHelper)
group.add(earth)
moon.position.set(25, 25, 0)
group.add(moon)

function addStars() {
  const geometry = new THREE.SphereGeometry(0.25, 25, 25)
  const materials = new THREE.MeshStandardMaterial({
    color: 0xffffff
  })
  const star = new THREE.Mesh(geometry, materials)
  const [x, y, z] = Array(3).fill().map(() => {
    return THREE.MathUtils.randFloatSpread(100)
  })
  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStars)
scene.add(group)
function animate() {
  requestAnimationFrame(animate)
  earth.rotation.z += 0.001
  moon.rotation.y += 0.001
  controls.update()
  renderer.render(scene, camera);
}

animate()