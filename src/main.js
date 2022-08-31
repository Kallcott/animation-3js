import { World } from "./world/world.js";

function main() {
  const container = document.querySelector("#scene-container");

  const world = new World(container);

  // Swap out world.render for world.start to start the animation loop.
  world.start();
}

main();

const button = document.querySelector("#button");
button.addEventListener("click", main);
