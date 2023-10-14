'use client';

import { useState } from 'react';

import { LabelSupplier } from './label-supplier';

import { cn } from '@/lib/util';
import { Button } from '@/components/button';
import { LabelInfo } from './label-info';
import type { Game } from '@/interfaces/Game';

import img from '@/assets/img/card-placeholder.png';
import { ButtonBonus } from './button-bonus';
import { ButtonInfo } from './button-info';

interface Props {
  game: Game;
}

export const Card = (props: Props) => {
  const { disabled, name, info, supplier, src } = props.game;

  const [isPressing, setIsPressing] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <div className="w-[130px] h-[120px] sm:w-[250px] sm:h-[200px] border relative rounded-2xl overflow-hidden group/card">
      <div className="absolute inset-0">
        <img src={img.src} alt={name} className="w-full h-full" />
      </div>

      <div className="absolute py-2 px-3 border inset-0">
        <div className="flex justify-between items-start w-full relative z-10">
          <LabelSupplier supplierName={supplier} />

          {!isPressing && !isShowInfo && !disabled && (
            <ButtonInfo onClick={() => setIsShowInfo(true)} />
          )}
        </div>

        {!isShowInfo && (
          <div className="absolute inset-0 m-auto z-10 w-fit h-fit">
            <Button
              className="group-hover/card:block hidden text-xs bg-opacity-60 py-2 px-4"
              color="accent"
              disabled={disabled}
              onMouseDown={() => setIsPressing(true)}
              onMouseUp={() => setIsPressing(false)}
            >
              {disabled ? 'NO DISPONIBLE' : 'JUGAR AHORA'}
            </Button>
          </div>
        )}

        {!isPressing && !isShowInfo && !disabled && (
          <div className="absolute bottom-4 z-10 hidden group-hover/card:block">
            <h3 className="text-white font-bold sm:block hidden">{name}</h3>
          </div>
        )}

        {isShowInfo && (
          <div className="absolute bottom-4 text-white z-10 flex flex-col gap-1 items-start">
            <h3 className="text-white font-bold sm:text-base text-[10px]">{name}</h3>
            <div className="flex gap-1">
              <LabelInfo>VERSIÓN: {info.version}</LabelInfo>
              <LabelInfo>RTP: {info.rtp}</LabelInfo>
            </div>
            <LabelInfo>VOTALIDAD: ALTA</LabelInfo>
          </div>
        )}

        {isShowInfo && (
          <ButtonInfo
            onClick={() => setIsShowInfo(false)}
            className="absolute right-2 bottom-2 z-10"
            variant="accent"
          />
        )}

        {!isShowInfo && info.moodBonus && <ButtonBonus />}
      </div>

      <div
        onClick={() => setIsShowInfo(false)}
        className={cn('absolute inset-0 z-0 bg-gradient-to-t from-black', {
          'hidden group-hover/card:block ': !isShowInfo,
          'block from-[rgba(0,0,0,0.80)] to-[rgba(0,0,0,0.27)]': isShowInfo,
          'bg-black bg-none bg-opacity-60': disabled,
        })}
      ></div>
    </div>
  );
};
