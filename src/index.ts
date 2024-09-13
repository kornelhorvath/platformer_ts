const canvas: any = document.querySelector("#canvas1");
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.95;
canvas.height = window.innerHeight * 0.95;
let topPos = canvas.getBoundingClientRect().top + window.scrollY;
let leftPos = canvas.getBoundingClientRect().left + window.scrollX;
let mouseX = leftPos;
let mouseY = topPos;


class Game {
  constructor(width: number, height: number){

  }

  update(ctx: CanvasRenderingContext2D, deltaTime: any){
    console.log(deltaTime);
  }

  draw(ctx: CanvasRenderingContext2D){

  }
}


const game = new Game(canvas.width, canvas.height);
let lastTime = 0;
function animate(timeStamp: any) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update(ctx, deltaTime);
  game.draw(ctx);
  requestAnimationFrame(animate);
}
animate(0);




