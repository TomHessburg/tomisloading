import React from "react";
import HeroCopy from "./HeroCopy";
import PhotoGrid from "./PhotoGrid";
import TILLoader from "./TILLoader";

export default function Hero() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-evenly gap-4 sm:gap-12 overflow-hidden relative">
      <HeroCopy />
      <div className="hidden m-6 ml-0 rounded-lg sm:flex items-center justify-center w-2/5 min-h-[600px] overflow-hidden relative">
        <PhotoGrid />
        <TILLoader />
      </div>
      <div className="w-2 absolute top-0 bottom-0 left-0 bg-gradient-to-b from-brand to-accent" />
    </header>
  );
}
