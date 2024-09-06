'use client'
import  useGameContext  from "@/data/hooks/useGameContext";
import { Movement } from "@jankenpon/core";

import papel from '../../../public/images/pape.jpeg'
import pedra from '../../../public/images/pedr.jpeg'
import tesoura from '../../../public/images/tes.jpeg'
import Image from "next/image";

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
        <main className="p-4 flex flex-col gap-5 items-center justify-start h-full min-w-[50%]">
            <section className="w-full flex justify-around gap-5">
                <button onClick={() => handePlayer1Move(Movement.rock)} className="w-32 h-32 p-1 bg-[#4D0F43] rounded-lg flex flex-col items-center text-white justify-center hover:opacity-80 transition-opacity">
                    PEDRA
                    <Image src={pedra} alt="pedra" className="h-24 object-cover rounded-lg "/>
                </button>
                <button onClick={() => handePlayer1Move(Movement.paper)} className="w-32 h-32 p-1 bg-blue-500 rounded-lg flex flex-col items-center text-white justify-center hover:opacity-80 transition-opacity">
                    PAPEL
                <Image src={papel} alt="papel" className="h-24 object-cover rounded-lg "/>
                </button>
                <button onClick={() => handePlayer1Move(Movement.scissors)} className="w-32 h-32 p-1 bg-[#0A2B19] rounded-lg flex flex-col items-center text-white justify-center hover:opacity-80 transition-opacity">
                    TESOURA
                <Image src={tesoura} alt="tesoura" className="h-24 object-cover rounded-lg"/>
                </button>
            </section>

            <section>
                {winner && <p className="text-2xl font-bold mt-4">{winner}</p>}
            </section>
        </main>
    )
}