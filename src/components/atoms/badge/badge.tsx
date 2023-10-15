export const Badge = ({ children, ...restProps }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className="bg-[#010101] bg-opacity-80 p-1 w-6 sm:w-20 h-6 grid place-content-center rounded-md"
      {...restProps}
    >
      {children}
    </div>
  );
};
