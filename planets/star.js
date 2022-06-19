import * as THREE from "three"
import { scene } from "../main"

export function addStars() {
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