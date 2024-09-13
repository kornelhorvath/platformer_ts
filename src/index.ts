import { Game } from "./game";

const canvas = document.querySelector("#canvas1") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const game = new Game(canvas.width, canvas.height);
let lastTime: number = 0;

function animate(timeStamp: number) {
  const deltaTime = (timeStamp - lastTime) / 1000;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update(ctx, deltaTime);
  game.draw(ctx);
  requestAnimationFrame(animate);
}

animate(0);
