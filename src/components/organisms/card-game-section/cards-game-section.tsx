import { CardGame } from '@/components/molecules/card-game';
import type { Game } from '@/interfaces/Game';

interface Props {
  games: Game[];
}

export const CardsGameSection = ({ games }: Props) => {
  return (
    <section className="">
      <h2 className="my-8">Cards</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-fit gap-2">
        {games.map((game) => (
          <CardGame key={game.name} game={game} />
        ))}
      </div>
    </section>
  );
};
