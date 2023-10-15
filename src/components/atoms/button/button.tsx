import { cn } from '@/lib/util';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'accent';
  variant?: 'contained' | 'outline';
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
}

export const Button = (props: Props) => {
  const {
    children,
    className,
    color = 'primary',
    variant = 'contained',
    iconPosition = 'left',
    icon,
    ...restProps
  } = props;

  const baseClassname =
    'uppercase py-[14px] px-8 font-bold rounded-lg flex gap-[10px] items-center border transition-colors';
  const primaryContainedClassname =
    'bg-primary-900 border-primary-900 text-white hover:bg-primary-500 hover:border-primary-500 active:border-primary-900 disabled:bg-neutral-100 disabled:border-neutral-100 disabled:text-neutral-200';
  const primaryOutlineClassname =
    'bg-transparent border-2 border-primary-900 text-primary-900 hover:bg-primary-100 active:bg-primary-500 active:text-white disabled:border-neutral-200 disabled:text-neutral-200 disabled:bg-transparent';
  const accentContainedClassname =
    'bg-accent-900 border-accent-900 text-white hover:bg-accent-500 hover:border-accent-500 active:border-accent-900 disabled:bg-neutral-100 disabled:border-neutral-100 disabled:text-neutral-200';
  const accentOutlineClassname =
    'bg-transparent border-2 border-accent-900 text-accent-900 hover:bg-accent-100 active:bg-accent-500 active:text-white disabled:border-neutral-200 disabled:text-neutral-200 disabled:bg-transparent';

  return (
    <button
      className={cn(
        baseClassname,

        color == 'primary' && variant == 'contained' && primaryContainedClassname,
        color == 'primary' && variant == 'outline' && primaryOutlineClassname,
        color == 'accent' && variant == 'contained' && accentContainedClassname,
        color == 'accent' && variant == 'outline' && accentOutlineClassname,

        iconPosition == 'right' && 'flex-row-reverse',

        className
      )}
      {...restProps}
    >
      {icon}
      {children}
    </button>
  );
};
