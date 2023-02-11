import React from "react";

export default function HeroCopy() {
  return (
    <div className="w-full lg:w-fit">
      <span className="block bg-brand text-white font-bold p-2 w-fit rounded-lg shadow -rotate-6 -ml-4 mb-2">
        By @TomIsLoading
      </span>

      <h1 className="text-6xl sm:text-8xl mb-4">
        Welcome
        <br />
        to <span className="font-bold">Blast</span>{" "}
        <span className="inline-block wave">👋</span>
      </h1>

      <div className="text-xl sm:text-xl font-light flex flex-col gap-1">
        <span>To-the-point web dev tutorials.</span>
        <span>Weekly frontend newsletter.</span>
        <span>Entry level dev jobs.</span>
        <span>Mentorship.</span>
      </div>
    </div>
  );
}
