import { Clock } from "three";

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    //updatables will include all our animated objects.
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // There are design choices to our tick method. If we have a small pool of objects we can animate them here, otherwise its best to give each objects it's own tick method.

    //The clock delta is used to scale animation to time instead of framerate.
    const delta = clock.getDelta();
    // console.log(`The last frame rendered in ${delta * 1000} miliseconds`);

    // this will activate each object's tick method.
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
