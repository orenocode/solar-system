import * as three from "three"
import { moon } from "./moon"

const earthTexture = new three.TextureLoader().load('textures/earth_texture.jpg')

export const earth = new three.Mesh(
    new three.SphereGeometry(10, 30, 30),
    new three.MeshStandardMaterial({
        map: earthTexture
    })
)

earth.add(moon)