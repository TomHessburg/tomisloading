import BaseButton from "components/buttons/BaseButton";
import React from "react";
import EmailInput from "./EmailInput";

export default function HeroCopy() {
  return (
    <div className="w-full sm:w-2/3 p-8">
      <div className="max-w-xl mx-auto">
        <span className="block bg-gradient-to-r from-brand to-accent text-white font-bold p-2 w-fit rounded-lg shadow sm:mb-4 sm:ml-0 mb-2 mx-auto text-sm">
          By @TomIsLoading
        </span>

        <h1 className="text-5xl sm:text-7xl max-w-xl mb-4 text-center sm:text-start">
          To-the-point
          <br />
          <span className="font-bold">web dev tutorials</span>
        </h1>

        <div className="text-lg max-w-xl font-light flex flex-col gap-1 text-center sm:text-start">
          <span className="mb-2">
            Hey, I'm Tom <span className="inline-block wave">👋</span> I write
            code and talk about it 💻. I have a newsletter called Frontend
            Fridays. Every week I send out tips, tools & jobs from early career
            web devs. It's free ❤️
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <EmailInput />
          <BaseButton>Join Newsletter</BaseButton>
        </div>
      </div>
    </div>
  );
}
