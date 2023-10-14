'use client';

import { useState } from 'react';

import {
  CardGameHeader,
  CardGameCta,
  CardGameInfo,
  CardGameFooter,
  CardGameBgImage,
  CardGameBgOverlay,
} from './';

// import img from '@/assets/img/card-placeholder.png';
import type { Game } from '@/interfaces/Game';

interface Props {
  game: Game;
}

const CardGame = (props: Props) => {
  const { disabled, name, info, supplier, src } = props.game;

  const [isPressing, setIsPressing] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <div className="w-[130px] h-[120px] sm:w-[250px] sm:h-[200px] relative rounded-2xl overflow-hidden group/card">
      <CardGameBgImage srcImage={src} altImage={name} />

      <CardGameHeader
        showButtonInfo={!isPressing && !isShowInfo && !disabled}
        supplierName={supplier}
        onClickInfo={() => setIsShowInfo(true)}
      />

      {!isShowInfo && (
        <CardGameCta
          onMouseDown={() => setIsPressing(true)}
          onMouseUp={() => setIsPressing(false)}
          disabled={disabled}
        />
      )}

      {isShowInfo && <CardGameInfo name={name} rtp={info.rtp} version={info.version} />}

      <CardGameFooter
        name={name}
        showName={!isPressing && !isShowInfo && !disabled}
        showButtonInfo={isShowInfo}
        showButtonBonus={!isShowInfo && info.moodBonus}
        onClickButtonInfo={() => setIsShowInfo(false)}
      />

      <CardGameBgOverlay
        isShowInfo={isShowInfo}
        disabled={disabled}
        onClick={() => setIsShowInfo(false)}
      />
    </div>
  );
};

export default CardGame;
