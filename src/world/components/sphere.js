import { Mesh, MeshPhongMaterial, SphereBufferGeometry } from "three";

function createSphere() {
  // create a geometry

  // So a circle is only 2D, while a sphere is 3D
  // const geometry = new CircleBufferGeometry(1, 40);
  const geometry = new SphereBufferGeometry(1, 40);

  // Material that reacts to light
  const material = new MeshPhongMaterial({
    color: "cyan",
    shininess: 150,
    flatShading: true,
  });

  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);

  var theta = 0;
  sphere.tick = (delta) => {
    theta += 0.009;
    sphere.position.y += 2 * Math.sin(theta).toFixed(4) * delta;
    sphere.position.x += 2 * Math.cos(theta).toFixed(4) * delta;
    sphere.rotation.y += 0.3 * delta;
    sphere.rotation.z += 0.3 * delta;
  };

  return sphere;
}

export { createSphere };
