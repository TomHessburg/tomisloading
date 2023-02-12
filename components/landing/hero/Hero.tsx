import React from "react";
import HeroCopy from "./HeroCopy";
import PhotoGrid from "./PhotoGrid";

export default function Hero() {
  return (
    <div className="p-8 flex flex-col-reverse sm:flex-row items-center justify-evenly gap-4 sm:gap-12">
      <HeroCopy />

      <PhotoGrid />
    </div>
  );
}
