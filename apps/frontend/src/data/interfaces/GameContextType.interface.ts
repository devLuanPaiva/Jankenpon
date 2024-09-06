import { Movement } from "@jankenpon/core";

export interface GameContextType{
    movementPlayer1: Movement | null
    movementPlayer2: Movement | null
    setMovementPlayer1: (movement: Movement) => void
    setMovementPlayer2: (movement: Movement) => void
    determineWinners: () => string | null
 }