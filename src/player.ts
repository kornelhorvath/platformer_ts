import type { Game } from "./game";

export class Player {
    private game: Game;

    private x: number;
    private y: number;
    private velocityX: number;
    private velocityY: number;

    private width: number;
    private speed: number;

    constructor(game: Game){
        this.game = game;
        this.x = 50;
        this.y = 50;
        this.velocityX = 0;
        this.velocityY = 0;
        this.width = 20;
        this.speed = 700;
    }

    update(deltaTime: number){
        const wPressed = this.game.keys.includes("w");        
        const aPressed = this.game.keys.includes("a");
        const sPressed = this.game.keys.includes("s");
        const dPressed = this.game.keys.includes("d");

        this.velocityX = 0;
        this.velocityY = 0;

        if (wPressed) this.velocityY -= this.speed;
        if (aPressed) this.velocityX -= this.speed;
        if (sPressed) this.velocityY += this.speed;
        if (dPressed) this.velocityX += this.speed;

        const magnitude = Math.sqrt(this.velocityX * this.velocityX + this.velocityY * this.velocityY);

        if (magnitude > 0) {
            this.velocityX /= magnitude;
            this.velocityY /= magnitude;

            this.velocityX *= this.speed;
            this.velocityY *= this.speed;
        }

        this.x += this.velocityX * deltaTime;
        //this.y += this.velocityY * deltaTime;
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = "grey";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}
