export enum Movement{
    rock = "rock",
    paper = "paper",
    scissors = "scissors",
}

export class Game{
    private rules = {
        [Movement.rock]: Movement.scissors,
        [Movement.paper]: Movement.rock,
        [Movement.scissors]: Movement.paper,
    }

    winner(player1: Movement, player2: Movement): string{
        if(player1 === player2) return 'Empate';
        return this.rules[player1] === player2 ? 'Jogador 1 vence!' : 'Jogador 2 vence'
    }
}