'use client';

import { useState } from 'react';

import { CardHeader } from './card-header';
import { CardCta } from './card-cta';
import { CardInfo } from './card-info';
import { CardFooter } from './card-footer';
import { CardBgImage } from './card-bg-image';
import { CardBgOverlay } from './card-bg-overlay';

// import img from '@/assets/img/card-placeholder.png';
import type { Game } from '@/interfaces/Game';

interface Props {
  game: Game;
}

export const Card = (props: Props) => {
  const { disabled, name, info, supplier, src } = props.game;

  const [isPressing, setIsPressing] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <div className="w-[130px] h-[120px] sm:w-[250px] sm:h-[200px] relative rounded-2xl overflow-hidden group/card">

      <CardBgImage srcImage={src} altImage={name} />

      <CardHeader
        showButtonInfo={!isPressing && !isShowInfo && !disabled}
        supplierName={supplier}
        onClickInfo={() => setIsShowInfo(true)}
      />

      {!isShowInfo && (
        <CardCta
          onMouseDown={() => setIsPressing(true)}
          onMouseUp={() => setIsPressing(false)}
          disabled={disabled}
        />
      )}

      {isShowInfo && <CardInfo name={name} rtp={info.rtp} version={info.version} />}

      <CardFooter
        name={name}
        showName={!isPressing && !isShowInfo && !disabled}
        showButtonInfo={isShowInfo}
        showButtonBonus={!isShowInfo && info.moodBonus}
        onClickButtonInfo={() => setIsShowInfo(false)}
      />

      <CardBgOverlay
        isShowInfo={isShowInfo}
        disabled={disabled}
        onClick={() => setIsShowInfo(false)}
      />
    </div>
  );
};
