import React, { MouseEventHandler } from "react";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function BaseButton({
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <button
      className={`font-semibold text-sm bg-black hover:bg-black/80 transition-colors text-white px-5 h-[40px] rounded-lg whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
