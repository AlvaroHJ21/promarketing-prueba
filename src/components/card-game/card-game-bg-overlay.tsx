import { cn } from '@/lib/util';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isShowInfo: boolean;
  disabled: boolean;
}

export const CardGameBgOverlay = (props: Props) => {
  const { disabled, isShowInfo, ...restProps } = props;
  return (
    <div
      className={cn('absolute inset-0 z-0 bg-gradient-to-t from-black', {
        'hidden group-hover/card:block ': !isShowInfo,
        'block from-[rgba(0,0,0,0.80)] to-[rgba(0,0,0,0.27)]': isShowInfo,
        'bg-black bg-none bg-opacity-60': disabled,
      })}
      {...restProps}
    ></div>
  );
};
