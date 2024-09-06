'use client'
import { DetermineWinner, Movement } from '@jankenpon/core'
import React, { createContext, useCallback, useMemo, useState } from 'react'
import { GameContextType } from '../interfaces'

export const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider(
    { children }: { readonly children: React.ReactNode }
) {
    const [movementPlayer1, setMovementPlayer1] = useState<Movement | null>(null)
    const [movementPlayer2, setMovementPlayer2] = useState<Movement | null>(null)

    const determineWinnerInstance = useMemo(() => new DetermineWinner(), [])

    const determineWinners = useCallback((): string | null => {
        if (movementPlayer1 && movementPlayer2) {
            return determineWinnerInstance.execute(movementPlayer1, movementPlayer2)
        }
        return null
    }, [movementPlayer1, movementPlayer2, determineWinnerInstance])

    const contextValue = useMemo(() => {
        return {
            movementPlayer1,
            setMovementPlayer1,
            movementPlayer2,
            setMovementPlayer2,
            determineWinners,
        }
    }, [movementPlayer1, movementPlayer2, determineWinners])

    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )
}
