import React from "react";
import HeroCopy from "./HeroCopy";
import PhotoGrid from "./PhotoGrid";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4 sm:gap-12 overflow-hidden">
      <HeroCopy />
      <div className="hidden sm:flex items-center justify-center w-1/3 h-[calc(100vh_-_65px)] overflow-hidden relative">
        <PhotoGrid />
      </div>
    </div>
  );
}
