import { ButtonInfo, ButtonBonus } from '.';

interface Props {
  name: string;
  showName: boolean;
  showButtonInfo: boolean;
  showButtonBonus: boolean;
  onClickButtonInfo(): void;
}

export const CardGameFooter = (props: Props) => {
  const { name, showButtonBonus, showButtonInfo, showName, onClickButtonInfo } = props;
  return (
    <div className="absolute z-10 inset-x-3 bottom-4 flex justify-between">
      <div>
        {showName && (
          <div className="hidden group-hover/card:block">
            <h3 className="text-white font-bold sm:block hidden">{name}</h3>
          </div>
        )}
      </div>

      {showButtonInfo && <ButtonInfo onClick={onClickButtonInfo} className="" variant="accent" />}

      {showButtonBonus && <ButtonBonus />}
    </div>
  );
};
