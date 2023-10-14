import { cn } from '@/lib/util';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'accent';
}

export const ButtonInfo = (props: Props) => {
  const { className, variant = 'default', ...restProps } = props;

  return (
    <button
      className={cn(
        'bg-[#010101] bg-opacity-80 text-white w-6 h-6 rounded-md grid place-content-center',
        variant == 'accent' && 'bg-accent-900 bg-opacity-20',
        className
      )}
      {...restProps}
      aria-label='info'
    >
      <AiOutlineInfoCircle />
    </button>
  );
};
