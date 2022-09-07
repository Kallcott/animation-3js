import { createCamera } from "./components/camera.js";

import { createCube } from "./components/cube.js";
import { createTriangle } from "./components/triangle.js";
import { createTorus } from "./components/torus.js";
import { createSphere } from "./components/sphere.js";

import { createLights } from "./components/lights.js";

import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

import { Euler, MathUtils, Matrix4, Vector3 } from "three";

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const cube = createCube();
    cube.position.set(0, 1.5, 0);
    cube.scale.set(1.2, 1.4, 0.8);
    cube.rotation.set(0, 20, 20);
    scene.add(cube);

    const myPOSVector = new Vector3(1.4, 1.4, -4);
    const myScaleVector = new Vector3(-1.1, -1.3, -0.4);

    const myEulerRotation = new Euler(
      Math.PI / 2,
      1.57079,
      MathUtils.degToRad(45)
    );

    const triangle = createTriangle();
    triangle.position.copy(myPOSVector);
    triangle.scale.copy(myScaleVector);
    triangle.rotation.copy(myEulerRotation);
    scene.add(triangle);

    const torus = createTorus();
    torus.matrix = new Matrix4();
    torus.position.x = 0;
    torus.position.y = -2;
    torus.position.z = -5;

    torus.scale.set(1.2, 0.9, 1.4);

    torus.rotation.x = MathUtils.degToRad(30);

    torus.updateMatrix();
    scene.add(torus);

    const sphere = createSphere();
    sphere.position.set(0, -1.4, 0);
    sphere.rotateZ(MathUtils.degToRad(45));
    scene.add(sphere);

    const childCube = createCube();
    childCube.scale.set(0.2, 1.5, 0.2);
    childCube.position.x = 0.4;
    childCube.updateMatrixWorld();

    sphere.position.y = -2;
    sphere.updateMatrix();
    sphere.add(childCube);

    const light = createLights();
    scene.add(light);

    const resizer = new Resizer(container, camera, renderer);

    // We don't need a resize hook anymore, because the animation loop is already updating every frame.
    // resizer.onResize = () => {
    //   this.render();
    // };

    // add objects to our animation loop.
    loop.updatables.push(cube);
    loop.updatables.push(sphere);
    loop.updatables.push(triangle);
    loop.updatables.push(torus);
    loop.updatables.push(camera);
    loop.updatables.push(light);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
