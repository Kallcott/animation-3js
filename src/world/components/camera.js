import { Clock, MathUtils, PerspectiveCamera } from "three";
import { World } from "../world";
import { minMaxModulous } from "../systems/Helper.js";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  var theta = 0;
  camera.tick = (delta) => {
    theta += 0.01;
    camera.position.z += 5 * Math.sin(theta).toFixed(4) * delta;
  };

  return camera;
}

export { createCamera };
