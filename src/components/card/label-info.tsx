import { cn } from '@/lib/util';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

export const LabelInfo = (props: Props) => {
  const { children, className, ...restProps } = props;

  return (
    <span
      className={cn(
        'bg-accent-900 bg-opacity-20 rounded-md font-bold text-[8px] whitespace-nowrap px-1 py-1 sm:text-xs',
        className
      )}
      {...restProps}
    >
      {children}
    </span>
  );
};
