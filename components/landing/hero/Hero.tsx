import React from "react";
import HeroCopy from "./HeroCopy";
import PhotoGrid from "./PhotoGrid";

export default function Hero() {
  return (
    <div className="p-8 md:p-12 flex items-center justify-evenly gap-24">
      <HeroCopy />

      <PhotoGrid />
    </div>
  );
}
