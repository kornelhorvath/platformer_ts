import type { Game } from "./game";

export class InputHandler {
    private game: Game;

    constructor(game: Game) {
        this.game = game;
        window.addEventListener("keydown", (e) => {
            if (
            (e.key === "a" || e.key === "d" || e.key === "w" || e.key === "s") &&
            this.game.keys.indexOf(e.key) === -1
            ) {
            this.game.keys.push(e.key);
            }
        });
        window.addEventListener("keyup", (e) => {
            if (this.game.keys.indexOf(e.key) > -1) {
            this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
            }
        });
    }
}
