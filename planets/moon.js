import * as three from "three"

const moonTexture = new three.TextureLoader().load("../textures/moon_texture.jpg")
const surfaceTexture = new three.TextureLoader().load("../textures/moon_surface_texture.jpg")

export const moon = new three.Mesh(
    new three.SphereGeometry(3, 200, 200),
    new three.MeshStandardMaterial({
        map: moonTexture,
        normalMap: surfaceTexture,
    })
)