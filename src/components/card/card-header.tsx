import { LabelSupplier } from './label-supplier';
import { ButtonInfo } from './button-info';

interface Props {
  supplierName: string;
  showButtonInfo: boolean;
  onClickInfo: () => void;
}

export const CardHeader = (props: Props) => {
  const { showButtonInfo, supplierName, onClickInfo } = props;

  return (
    <div className="flex justify-between items-start absolute inset-x-3 top-2 z-10">
      <LabelSupplier supplierName={supplierName} />

      {showButtonInfo && <ButtonInfo onClick={onClickInfo} />}
    </div>
  );
};
