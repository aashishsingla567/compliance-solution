import cn from "@tools/cn";

const MaxWidthContainer = ({
  children,
  className,
  as: Component = "div",
  ...props
}: React.HTMLProps<HTMLDivElement> & {
  as?: React.ElementType;
}) => {
  return (
    <Component className={cn("mx-auto max-w-7xl px-4", className)} {...props}>
      {children}
    </Component>
  );
};

export default MaxWidthContainer;
