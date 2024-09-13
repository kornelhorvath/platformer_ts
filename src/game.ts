import { InputHandler } from "./inputhandler";
import { Player } from "./player";

export class Game {
    public keys: string[];

    private player: Player;
    private input: InputHandler;
  
    constructor(width: number, height: number){
      this.player = new Player(this);
      this.keys = [];
      this.input = new InputHandler(this);
    }
  
    update(ctx: CanvasRenderingContext2D, deltaTime: number){
        this.player.update(deltaTime);
        console.log(deltaTime);
    }
  
    draw(ctx: CanvasRenderingContext2D){
        this.player.draw(ctx);
    }
  }
