import { Game, Movement } from "./Game.class";

export class DetermineWinner {
  private game: Game;
  constructor() {
    this.game = new Game();
  }

  execute(movementPlayer1: Movement, movementPlayer2: Movement): string {
    return this.game.winner(movementPlayer1, movementPlayer2);
  }
}
