import { Button } from '@/components/button';
import { Card } from '@/components/card/card';
import { getGames } from '@/services/games.service';

import { FaWallet, FaChevronDown } from 'react-icons/fa';

export default async function Home() {
  const games = await getGames();

  return (
    <main className="max-w-screen-lg m-auto w-[90%]">
      <h1 className="text-center text-2xl uppercase my-8">Prueba Técnica Promarketing</h1>

      <section>
        <h2 className="my-8">Buttons</h2>
        <div className="flex gap-2 mb-2 flex-wrap">
          <Button icon={<FaChevronDown size={20} />} aria-label="dropdown" />
          <Button icon={<FaWallet size={20} />}>Button</Button>
          <Button icon={<FaWallet size={20} />} iconPosition="right">
            Button
          </Button>
          <Button>Button</Button>
          <Button variant="outline">Button</Button>
        </div>
        <div className="flex gap-2 mb-2 flex-wrap">
          <Button icon={<FaChevronDown size={20} />} color="accent" aria-label="dropdown" />
          <Button icon={<FaWallet size={20} />} color="accent">
            Button
          </Button>
          <Button icon={<FaWallet size={20} />} iconPosition="right" color="accent">
            Button
          </Button>
          <Button color="accent">Button</Button>
          <Button variant="outline" color="accent">
            Button
          </Button>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button disabled>Button</Button>
          <Button variant="outline" disabled>
            Button
          </Button>
          <Button variant="outline" color="accent" disabled>
            Button
          </Button>
        </div>
      </section>

      <section>
        <h2 className="my-8">Cards</h2>
        <div className="grid grid-cols-2 w-fit gap-2">
          {games.map((game) => (
            <Card key={game.name} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}
