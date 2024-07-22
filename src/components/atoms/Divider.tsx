import cn from "~/tools/cn";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  const As = orientation === "horizontal" ? "hr" : "div";

  return (
    <As
      className={cn(
        "border-1 border-solid border-black bg-text",
        orientation === "horizontal"
          ? "h-px w-full self-stretch"
          : "w-px self-stretch",
        className,
      )}
      role="separator"
      {...props}
    />
  );
}
