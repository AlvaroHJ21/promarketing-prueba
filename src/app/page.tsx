import { ButtonSection } from '@/components/organisms/buttons-section';
import { CardsGameSection } from '@/components/organisms/card-game-section';
import { getGames } from '@/services/games.service';

export default async function Home() {
  const games = await getGames();

  return (
    <main className="max-w-screen-lg m-auto w-[90%]">
      <h1 className="text-center text-2xl uppercase my-8">Prueba Técnica Promarketing</h1>

      <CardsGameSection games={games} />

      <ButtonSection />
    </main>
  );
}
