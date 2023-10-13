import { Button } from '@/components/button';

import { FaWallet, FaChevronDown } from 'react-icons/fa';

//https://run.mocky.io/v3/a095fe75-f09e-45fa-967c-4b9c4c908fb3

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-2xl uppercase my-8">Prueba Técnica Promarketing</h1>
      <div className="flex gap-2 mb-2">
        <Button icon={<FaChevronDown size={20} />} />
        <Button icon={<FaWallet size={20} />}>Button</Button>
        <Button icon={<FaWallet size={20} />} iconPosition="right">
          Button
        </Button>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
      </div>
      <div className="flex gap-2">
        <Button icon={<FaChevronDown size={20} />} color="accent" />
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
    </main>
  );
}
