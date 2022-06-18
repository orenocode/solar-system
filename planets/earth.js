import * as three from "three"

const earthTexture = new three.TextureLoader().load('../textures/earth_texture.jpg')

export const earth = new three.Mesh(
    new three.SphereGeometry(15, 200, 200),
    new three.MeshStandardMaterial({
        map: earthTexture
    })
)