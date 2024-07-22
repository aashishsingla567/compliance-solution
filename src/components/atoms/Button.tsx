import DotsLoader from "@assets/svg/three-dots-loader.svg";
import { useState } from "react";
import cn from "~/tools/cn";
import { type MaybePromise } from "~/types";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => MaybePromise<void>;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "text";
}

const VARIANT_CLASSES = {
  primary: "btn-primary bg-primary text-text-50",
  secondary: "btn-secondary bg-background border-1",
  text: "bg-transparent text-primary",
};

const Loader = () => (
  <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full">
    <DotsLoader className="z-10" />
    <div className="absolute left-0 top-0 flex h-full w-full rounded-full bg-background opacity-50" />
  </div>
);

const Button = ({
  children,
  onClick,
  isDisabled,
  isLoading = false,
  className,
  variant = "primary",
}: ButtonProps) => {
  const [loading, setLoading] = useState(isLoading);

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "btn relative rounded-full px-4 py-2",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
      {isLoading ? <Loader /> : null}
    </button>
  );
};

export default Button;
