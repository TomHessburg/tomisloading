import React, { Dispatch, SetStateAction } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  text: string;
  setSection: Dispatch<SetStateAction<string | null>>;
}

export default function Option({ text, setSection }: Props) {
  return (
    <button
      onClick={() => setSection(text)}
      className="w-full p-2 mb-2 font-medium text-sm flex items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
    >
      <span>{text}</span>
      <MdKeyboardArrowRight size="22px" />
    </button>
  );
}
