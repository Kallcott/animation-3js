import { MathUtils, Mesh, MeshToonMaterial, TorusBufferGeometry } from "three";

function createTorus() {
  // create a geometry
  const geometry = new TorusBufferGeometry(1, 0.5, 5, 20, 6.285);

  // Material that reacts to light
  const material = new MeshToonMaterial({
    color: "MediumSpringGreen",
  });

  // create a Mesh containing the geometry and material
  const torus = new Mesh(geometry, material);

  const radiansPerSeconds = MathUtils.degToRad(50);
  torus.tick = (delta) => {
    torus.rotation.z -= radiansPerSeconds * delta;
    torus.rotation.x -= radiansPerSeconds * delta;
    torus.rotation.y -= radiansPerSeconds * delta;
  };

  return torus;
}

export { createTorus };
