import BaseButton from "components/buttons/BaseButton";
import React from "react";
import EmailInput from "./EmailInput";
import anime from "animejs";
import { useEffect } from "react";

export default function HeroCopy() {
  useEffect(() => {
    anime({
      targets: ".translate-item",
      translateY: [
        { value: 100, easing: "easeInOutQuad", duration: 0 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0, easing: "easeInOutQuad", duration: 0 },
        { value: 0, easing: "easeInOutQuad", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, { from: "first" }),
    });
  }, []);

  return (
    <div className="w-full lg:w-3/5 p-8">
      <div className="max-w-xl mx-auto">
        <div className="overflow-hidden">
          <span className="translate-item translate-y-[100px] block bg-gradient-to-r from-brand to-accent text-white font-bold p-2 w-fit rounded-lg shadow sm:mb-4 sm:ml-0 mb-2 mx-auto text-sm">
            By @TomIsLoading
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl max-w-xl mb-4 text-center sm:text-start">
          <span className="overflow-hidden inline-block">
            <span className="inline-block translate-item translate-y-[100px]">
              To-the-point
            </span>
          </span>
          <br />
          <span className="overflow-hidden inline-block">
            <span className="font-black inline-block translate-item translate-y-[100px]">
              web dev stuff
            </span>
          </span>
        </h1>

        <div className="max-w-xl font-light flex flex-col gap-1 text-center sm:text-start overflow-hidden">
          <span className="mb-2 inline-block translate-item translate-y-[100px]">
            Hey, I'm Tom <span className="inline-block wave">👋</span> I write
            code and talk about it 💻. I have a newsletter called{" "}
            <span className="font-semibold">Frontend Fridays</span>. Every week
            I send out <span className="font-semibold">tips, tools & jobs</span>{" "}
            for early career web devs.{" "}
            <span className="font-semibold">It's free</span> ❤️
          </span>
        </div>

        <div className="overflow-hidden">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Test");
            }}
            className="mt-4 flex items-center gap-2 translate-item translate-y-[100px]"
          >
            <EmailInput />
            <BaseButton>Join Newsletter</BaseButton>
          </form>
        </div>
      </div>
    </div>
  );
}
