import { LabelSupplier, ButtonInfo } from '.';

interface Props {
  supplierName: string;
  showButtonInfo: boolean;
  onClickInfo: () => void;
}

export const CardGameHeader = (props: Props) => {
  const { showButtonInfo, supplierName, onClickInfo } = props;

  return (
    <div className="flex justify-between items-start absolute inset-x-3 top-2 z-10">
      <div>
        <LabelSupplier supplierName={supplierName} />
      </div>

      {showButtonInfo && <ButtonInfo onClick={onClickInfo} />}
    </div>
  );
};