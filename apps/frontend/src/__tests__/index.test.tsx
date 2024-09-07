import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { GameProvider } from '@/data/contexts/GameContext'
import { describe } from 'node:test'

describe('Home', () => {
    it('renders a heiding', () => {
        render(
            <GameProvider>
                <Home />
            </GameProvider>
        )
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    })
})