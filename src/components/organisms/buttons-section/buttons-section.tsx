import { Button } from '@/components/atoms/button';
import { Icon } from '@/components/atoms/icon';
import React from 'react';

export const ButtonSection = () => {
  return (
    <section className="mb-8">
      <h2 className="my-8">Buttons</h2>
      <div className="flex gap-2 mb-2 flex-wrap">
        <Button icon={<Icon icon="chevron-down" />} aria-label="dropdown" />
        <Button icon={<Icon icon="wallet" size={20} />}>Button</Button>
        <Button icon={<Icon icon="wallet" size={20} />} iconPosition="right">
          Button
        </Button>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
      </div>
      <div className="flex gap-2 mb-2 flex-wrap">
        <Button icon={<Icon icon="chevron-down" />} color="accent" aria-label="dropdown" />
        <Button icon={<Icon icon="wallet" size={20} />} color="accent">
          Button
        </Button>
        <Button icon={<Icon icon="wallet" size={20} />} iconPosition="right" color="accent">
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
  );
};
