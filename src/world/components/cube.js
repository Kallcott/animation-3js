import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const spec = {
    color: "purple",
  };
  const material = new MeshStandardMaterial(spec);
  const cube = new Mesh(geometry, material);

  // adding a property (like this) to an existing class at run-time is bad practice (monkey-patching - poor porfermance)

  // This works, but speed is determined by framerate instead of seconds
  // cube.tick = () => {
  //   cube.rotation.z += 0.01;
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  // };

  const radiansPerSeconds = MathUtils.degToRad(80);
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSeconds * delta;
    cube.rotation.x += radiansPerSeconds * delta;
    cube.rotation.y += radiansPerSeconds * delta;
  };

  return cube;
}

export { createCube };
