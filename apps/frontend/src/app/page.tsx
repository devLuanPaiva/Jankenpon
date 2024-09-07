import { Game } from "@/components/game/Game";
import fundo from '../../public/images/fundo.jpeg';
import {Luckiest_Guy} from 'next/font/google'

const luckiestGuy = Luckiest_Guy({ subsets: ['latin'], weight:'400' });
export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center w-screen"
      style={{ backgroundImage: `url(${fundo.src})` }}
    >
      <div className="h-full flex flex-col items-center text-black w-full">
        <h1 className="text-4xl font-bold m-4" style={luckiestGuy.style}>JANKENPON</h1>
        <Game />
      </div>
    </div>
  );
}
