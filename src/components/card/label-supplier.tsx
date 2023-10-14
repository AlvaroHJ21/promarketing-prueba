"use client"

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { cn } from '@/lib/util';
import { suppliers } from '@/data/suppliers';

interface Props extends React.HTMLProps<HTMLDivElement> {
  supplierName: string;
}

export const LabelSupplier = (props: Props) => {
  const { children, className, supplierName, ...restProps } = props;

  const supplier = suppliers.find((sup) => sup.name === supplierName);

  const [isSm, setIsSm] = useState(typeof window !== 'undefined' && window.innerWidth < 640);

  useEffect(() => {
    function rezise() {
      const width = window.innerWidth;
      if (width < 640) {
        setIsSm(true);
      } else {
        setIsSm(false);
      }
    }
    window.addEventListener('resize', rezise);
    return () => {
      window.removeEventListener('resize', rezise);
    };
  }, []);

  if (!supplier) return null;

  return (
    <div
      className={cn(
        'bg-[#010101] bg-opacity-80 p-1 w-6 sm:w-20 h-6 grid place-content-center rounded-md',
        className
      )}
      {...restProps}
    >
      <Image
        src={isSm ? supplier.smImgSrc : supplier.imgSrc}
        alt={supplier?.name}
        width={isSm ? 20 : 80}
        height={isSm ? 20 : 24}
      />
    </div>
  );
};
