import { useGameContext } from "@/data/hooks/useGameContext";
import { Movement } from "@jankenpon/core";

export function Game() {
    const { setMovementPlayer1, setMovementPlayer2, determineWinners } = useGameContext()

    const getRandomMove = (): Movement => {
        const moves = Object.values(Movement);
        return moves[Math.floor(Math.random() * moves.length)];
    }
    const handePlayer1Move = (move: Movement) => {
        setMovementPlayer1(move)
        const randomMove = getRandomMove()
        setMovementPlayer2(randomMove)
    }
    const winner = determineWinners()

    return (
        <main>
            <section>
                <button onClick={() => handePlayer1Move(Movement.rock)}>Pedra</button>
                <button onClick={() => handePlayer1Move(Movement.paper)}>Papel</button>
                <button onClick={() => handePlayer1Move(Movement.scissors)}>Tesoura</button>
            </section>

            <section>
                {winner && <p>O vencedor é: {winner}</p>}
            </section>
        </main>
    )
}