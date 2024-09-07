import { render, screen, fireEvent } from "@testing-library/react";
import { Game } from "@/components/game/Game";
import { GameProvider } from "@/data/contexts/GameContext";
import '@testing-library/jest-dom'

describe("Game Component", () => {
    it("renders all buttons correctly", () => {
        render(
            <GameProvider>
                <Game />
            </GameProvider>
        );

        const pedraButton = screen.getByRole('button', { name: /pedra/i });
        const papelButton = screen.getByRole('button', { name: /papel/i });
        const tesouraButton = screen.getByRole('button', { name: /tesoura/i });

        expect(pedraButton).toBeInTheDocument()
        expect(papelButton).toBeInTheDocument()
        expect(tesouraButton).toBeInTheDocument()

    })

    it("handles player move and shows a winner", () => {
        render(
            <GameProvider>
                <Game />
            </GameProvider>
        );

        const pedraButton = screen.getByRole('button', { name: /pedra/i });
        fireEvent.click(pedraButton);

        expect(screen.getByText(/Jogador 1 vence!|Jogador 2 vence!|Empate!/i)).toBeInTheDocument();
    });
})