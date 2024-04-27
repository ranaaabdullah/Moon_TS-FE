import clsx from "clsx";
import React, { FC, ReactNode, RefObject } from "react";
import ButtonLoader from "./ButtonLoader";

type BgColor = "red" | "blue" | "green" | "none";

interface Props {
  className?: string;
  text?: string;
  disable?: boolean;
  ref?: RefObject<HTMLDivElement>;
  onClick: () => void;
  id?: string;
  bg?: BgColor;
  border?: boolean;
  borderWhite?: string;
  loader?: boolean;
  children?: ReactNode;
}

const Button: FC<Props> = ({
  className,
  text,
  ref,
  onClick,
  disable,
  id,
  bg,
  border,
  borderWhite,
  loader,
  children,
}) => {
  return (
    <div
      id={id}
      ref={ref}
      onClick={() => (disable ? () => {} : onClick())}
      className={clsx(
        ` uppercase tracking-wider  text-nowrap inline-flex justify-center items-center cursor-pointer text-black font-semibold py-2 `,
        {
          "text-brown-100 bg-white  ": text === "brown",
          "text-primary-200  border-white  ": text === "white",
          "underline leading-5": bg === "none",
          "border-black border-2 ": border,
          "border-white border-2 ": borderWhite,
          "border-none opacity-50  ": disable,
        },
        className
      )}
    >
      {loader ? <ButtonLoader /> : children}
    </div>
  );
};

export default Button;
