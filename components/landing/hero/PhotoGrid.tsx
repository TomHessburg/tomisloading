import React from "react";
import anime from "animejs";
import { useEffect } from "react";

export default function PhotoGrid() {
  useEffect(() => {
    anime({
      targets: ".img-grid-item",
      scale: [
        { value: 1, easing: "easeOutSine", duration: 1000 },
        { value: 0.75, easing: "easeInQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 1000 },
        { value: 0, easing: "easeInQuad", duration: 500 },
      ],
      delay: anime.stagger(250, { grid: [6, 6], from: "first" }),
      loop: true,
    });
  }, []);

  return (
    <div className="grid w-full scale-110 min-w-[550px] aspect-square grid-cols-6 gap-[2px]">
      <img
        src="hero-img/row-1-column-1.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-1-column-2.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-1-column-3.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-1-column-4.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-1-column-5.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-1-column-6.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />

      <img
        src="hero-img/row-2-column-1.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-2-column-2.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-2-column-3.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-2-column-4.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-2-column-5.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-2-column-6.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />

      <img
        src="hero-img/row-3-column-1.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-3-column-2.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-3-column-3.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-3-column-4.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-3-column-5.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-3-column-6.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />

      <img
        src="hero-img/row-4-column-1.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-4-column-2.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-4-column-3.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-4-column-4.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-4-column-5.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-4-column-6.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />

      <img
        src="hero-img/row-5-column-1.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-5-column-2.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-5-column-3.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-5-column-4.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-5-column-5.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-5-column-6.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />

      <img
        src="hero-img/row-6-column-1.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-6-column-2.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-6-column-3.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-6-column-4.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-6-column-5.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
      <img
        src="hero-img/row-6-column-6.webp"
        className="w-full h-auto img-grid-item bg-brand opacity-0 scale-75"
      />
    </div>
  );
}
