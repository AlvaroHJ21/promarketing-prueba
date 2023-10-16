import Image from 'next/image';

import { Badge } from '@/components/atoms/badge';
import { suppliers } from '@/data/suppliers';
import { ButtonInfo } from '.';

interface Props {
  supplierName: string;
  showButtonInfo: boolean;
  onClickInfo: () => void;
}

export const CardGameHeader = (props: Props) => {
  const { showButtonInfo, supplierName, onClickInfo } = props;

  const supplier = suppliers.find(
    (sup) => sup.name.toLowerCase() === supplierName.toLocaleLowerCase()
  );

  return (
    <div className="flex justify-between items-start absolute inset-x-3 top-2 z-10">
      {supplier && (
        <Badge>
          <Image
            className="hidden sm:block"
            src={supplier.imgSrc}
            alt={supplierName}
            width={80}
            height={24}
          />
          <Image
            className="block sm:hidden"
            src={supplier.smImgSrc}
            alt={supplierName}
            width={20}
            height={20}
          />
        </Badge>
      )}

      {showButtonInfo && <ButtonInfo onClick={onClickInfo} />}
    </div>
  );
};
