import React from "react";
import HeroCopy from "./HeroCopy";
import PhotoGrid from "./PhotoGrid";
import TILLoader from "./TILLoader";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4 sm:gap-12 overflow-hidden">
      <HeroCopy />
      <div className="hidden sm:flex items-center justify-center w-2/5 h-[600px] overflow-hidden bg-light relative">
        <PhotoGrid />
        <TILLoader />
      </div>
    </div>
  );
}
