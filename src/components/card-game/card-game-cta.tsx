import { ButtonHTMLAttributes } from 'react';
import { Button } from '@/components/button';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CardGameCta = (props: Props) => {
  const { className, disabled, color, ...restProps } = props;
  return (
    <div className="absolute inset-0 m-auto z-10 w-fit h-fit">
      <Button
        className="group-hover/card:block hidden text-xs bg-opacity-60 py-2 px-4 hover:bg-opacity-60 active:bg-opacity-100"
        color="accent"
        disabled={disabled}
        {...restProps}
      >
        {disabled ? 'NO DISPONIBLE' : 'JUGAR AHORA'}
      </Button>
    </div>
  );
};
