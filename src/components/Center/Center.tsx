import { ReactNode } from "react";

interface Props {
  dir?: "vertical" | "horizontal";
  children?: ReactNode;
  className?: string;
}
export default function Center({
  dir = "horizontal",
  children,
  className,
}: Props) {
  return (
    <div
      className={cx(
        "flex items-center justify-center",
        {
          "flex-row": dir === "horizontal",
          "flex-col": dir === "vertical",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
