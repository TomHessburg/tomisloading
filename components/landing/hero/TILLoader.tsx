import React from "react";
import anime from "animejs";
import { useEffect } from "react";

export default function TILLoader() {
  useEffect(() => {
    anime({
      targets: ".period-load",
      opacity: [
        { value: 0, easing: "easeOutSine", duration: 750 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(250, { grid: [4, 4], from: "first" }),
      loop: true,
    });
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm z-0">
      <span className="text-lg mt-4 text-white font-bold uppercase grid gap-1 grid-cols-4">
        <span className="period-load w-8 aspect-square grid place-items-center">
          @
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          t
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          o
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          m
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          i
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          s
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          l
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          o
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          a
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          d
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          i
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          n
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          g
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          .
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          .
        </span>
        <span className="period-load w-8 aspect-square grid place-items-center">
          .
        </span>
      </span>
    </div>
  );
}
