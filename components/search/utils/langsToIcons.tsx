import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import React from "react";

export const langsToIcons = (langs: string[]) => {
  const icons = [];

  if (langs.includes("JavaScript")) {
    icons.push(IoLogoJavascript);
  }

  if (langs.includes("HTML & CSS")) {
    icons.push(IoLogoCss3);
    icons.push(IoLogoHtml5);
  }

  return (
    <div className="flex">
      {icons.map((Icon, idx) => (
        <Icon size="22px" className="ml-1" key={idx} />
      ))}
    </div>
  );
};
