import * as three from "three"
import { camera, renderer, scene } from "../main"

const moonTexture = new three.TextureLoader().load("public/moon_texture.jpg")
const surfaceTexture = new three.TextureLoader().load("public/moon_surface_texture.jpg")

export const moon = new three.Mesh(
    new three.SphereGeometry(2, 200, 200),
    new three.MeshStandardMaterial({
        map: moonTexture,
        normalMap: surfaceTexture,
    })
)

moon.position.set(15, 15, 0)