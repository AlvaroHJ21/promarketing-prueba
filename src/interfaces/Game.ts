export interface Game {
  disabled: boolean;
  info: Info;
  name: string;
  src: string;
  supplier: string;
}

export interface Info {
  moodBonus: boolean;
  rtp: string;
  version: number;
}
