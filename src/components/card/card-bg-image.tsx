import Image from 'next/image';

interface Props {
  srcImage: string;
  altImage: string;
}

export const CardBgImage = (props: Props) => {
  const { srcImage, altImage } = props;

  return (
    <div className="absolute inset-0">
      <Image src={srcImage} alt={altImage} className="w-full h-full" width={250} height={200} />
    </div>
  );
};
