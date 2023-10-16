import pragmaticPlay from '@/assets/img/pragmatic-play.png';
import evoplay from '@/assets/img/evoplay.png';
import playTech from '@/assets/img/play-tech.png';
import spinomenal from '@/assets/img/spinomenal.png';
import habanero from '@/assets/img/habanero.png';

import evoplaIcon from '@/assets/img/evoplay-icon.png';
import pragmaticPlayIcon from '@/assets/img/pragmatic-play-icon.png';
import playTechIcon from '@/assets/img/play-tech-icon.png';
import spinomenalIcon from '@/assets/img/spinomenal-icon.png';
import habaneroIcon from '@/assets/img/habanero-icon.png';

interface SupplierData {
  name: string;
  imgSrc: string;
  smImgSrc: string;
}

export const suppliers: SupplierData[] = [
  {
    name: 'PragmaticPlay',
    imgSrc: pragmaticPlay.src,
    smImgSrc: pragmaticPlayIcon.src,
  },
  {
    name: 'Evoplay',
    imgSrc: evoplay.src,
    smImgSrc: evoplaIcon.src,
  },
  {
    name: 'PlayTech',
    imgSrc: playTech.src,
    smImgSrc: playTechIcon.src,
  },
  {
    name: 'Spinomenal',
    imgSrc: spinomenal.src,
    smImgSrc: spinomenalIcon.src,
  },
  {
    name: 'Habanero',
    imgSrc: habanero.src,
    smImgSrc: habaneroIcon.src,
  },
];
