import { LabelGameInfo } from '.';

interface Props {
  name: string;
  version: number;
  rtp: string;
}

export const CardGameInfo = ({ name, rtp, version }: Props) => {
  return (
    <div className="absolute left-3 bottom-4 text-white z-10 flex flex-col gap-1 items-start">
      <h3 className="text-white font-bold sm:text-base text-[10px]">{name}</h3>
      <div className="flex gap-1">
        <LabelGameInfo>VERSIÓN: V-{version}</LabelGameInfo>
        <LabelGameInfo>RTP: {rtp}</LabelGameInfo>
      </div>
      <LabelGameInfo>VOTALIDAD: ALTA</LabelGameInfo>
    </div>
  );
};
