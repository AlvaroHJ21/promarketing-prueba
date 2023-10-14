import React from 'react';
import giftIcon from '@/assets/img/gift-icon.png';

export const ButtonBonus = () => {
  return (
    <button
      className="absolute right-2 bottom-2 w-6 h-6 grid place-content-center text-white rounded-md bg-[#010101] bg-opacity-80 group-hover/card:bg-accent-900 group-hover/card:bg-opacity-20 z-10"
      aria-label="gift icon"
    >
      <img src={giftIcon.src} alt="gift icon" width={16} height={16} />
    </button>
  );
};
