import Image from 'next/image';

import giftIcon from '@/assets/img/gift-icon.png';
import { cn } from '@/lib/util';

export const ButtonBonus = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, 'aria-label': arialLabel, ...restProps } = props;
  return (
    <button
      className={cn(
        'w-6 h-6 grid place-content-center text-white rounded-md bg-[#010101] bg-opacity-80 group-hover/card:bg-accent-900 group-hover/card:bg-opacity-20 z-10',
        className
      )}
      aria-label="gift icon"
      {...restProps}
    >
      <Image src={giftIcon.src} alt="gift icon" width={16} height={16} />
    </button>
  );
};
