import React from "react";
import anime from "animejs";
import { useEffect } from "react";

export default function PhotoGrid() {
  useEffect(() => {
    anime({
      targets: ".img-grid-item",
      scale: [
        { value: 0.5, easing: "easeOutSine", duration: 750 },
        { value: 0.5, easing: "easeOutSine", duration: 750 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0, easing: "easeOutSine", duration: 750 },
        { value: 0, easing: "easeOutSine", duration: 750 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(250, { grid: [6, 6], from: "first" }),
      loop: true,
    });
  }, []);

  return (
    <div className="hidden md:grid w-full max-w-md aspect-square grid-cols-6 gap-[1px]">
      <img
        src="hero-img/row-1-column-1.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-1-column-2.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-1-column-3.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-1-column-4.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-1-column-5.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-1-column-6.jpg"
        className="w-full h-auto img-grid-item"
      />

      <img
        src="hero-img/row-2-column-1.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-2-column-2.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-2-column-3.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-2-column-4.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-2-column-5.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-2-column-6.jpg"
        className="w-full h-auto img-grid-item"
      />

      <img
        src="hero-img/row-3-column-1.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-3-column-2.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-3-column-3.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-3-column-4.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-3-column-5.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-3-column-6.jpg"
        className="w-full h-auto img-grid-item"
      />

      <img
        src="hero-img/row-4-column-1.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-4-column-2.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-4-column-3.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-4-column-4.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-4-column-5.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-4-column-6.jpg"
        className="w-full h-auto img-grid-item"
      />

      <img
        src="hero-img/row-5-column-1.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-5-column-2.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-5-column-3.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-5-column-4.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-5-column-5.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-5-column-6.jpg"
        className="w-full h-auto img-grid-item"
      />

      <img
        src="hero-img/row-6-column-1.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-6-column-2.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-6-column-3.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-6-column-4.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-6-column-5.jpg"
        className="w-full h-auto img-grid-item"
      />
      <img
        src="hero-img/row-6-column-6.jpg"
        className="w-full h-auto img-grid-item"
      />
    </div>
  );
}
