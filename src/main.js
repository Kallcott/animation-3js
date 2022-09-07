import { World } from "./world/world.js";

var animationRunning;
function main() {
  const container = document.querySelector("#scene-container");

  const world = new World(container);

  // Swap out world.render for world.start to start the animation loop.
  // world.render will only render on demand
  // world.start will produce a constant stream of frames.
  world.start();
  animationRunning = true;

  const canvas = document.querySelector("#scene-container");
  canvas.addEventListener("click", toggleAnimation);

  function toggleAnimation() {
    animationRunning ? world.stop() : world.start();
    animationRunning = !animationRunning;
  }
}

main();

// const button = document.querySelector("#button");
// button.addEventListener("click", main);
