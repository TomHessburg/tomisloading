import React, { FocusEventHandler, MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  className?: string;
  style?: object;
}

export default function GhostIconButton({
  onClick,
  Icon,
  className = "",
  onFocus,
  onBlur,
  style = {},
}: Props) {
  return (
    <button
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      className={`w-[40px] h-[40px] rounded-lg text-black flex items-center justify-center transition-colors bg-white hover:bg-light ${className}`}
      style={style}
    >
      <Icon size="24px" />
    </button>
  );
}
