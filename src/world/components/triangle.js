import { Mesh, ConeBufferGeometry, MeshMatcapMaterial, MathUtils } from "three";
import { minMaxModulous } from "../systems/Helper";

function createTriangle() {
  // create a geometry
  const geometry = new ConeBufferGeometry(1, 2, 4, 1);

  // Material that reacts to light
  const material = new MeshMatcapMaterial({ color: "orange" });

  // create a Mesh containing the geometry and material
  const triangle = new Mesh(geometry, material);

  const radiansPerSeconds = MathUtils.degToRad(20);
  triangle.tick = (delta) => {
    triangle.rotation.y += radiansPerSeconds * delta;
    triangle.position.x =
      minMaxModulous(triangle.position.x, 8, -8) + 3 * delta;
  };

  return triangle;
}

export { createTriangle };
