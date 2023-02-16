import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "framer-motion";
import BaseButton from "components/buttons/BaseButton";
import { MdCode, MdCheck } from "react-icons/md";

export default function Mentor() {
  const copyRef = useRef(null);
  const isInView = useInView(copyRef, { margin: "-200px", once: true });

  useEffect(() => {
    isInView && triggerEnterAnim();
  }, [isInView]);

  const triggerEnterAnim = () => {
    anime({
      targets: ".mentor-copy",
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
  };

  return (
    <section className="w-full px-4 lg:px-12 py-12 lg:py-24 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-24 overflow-hidden">
      <div ref={copyRef} className="h-fit relative w-full md:w-1/2">
        <h2 className="font-bold text-5xl md:text-6xl">
          <span className="overflow-hidden inline-block">
            <span className="inline-block mentor-copy translate-y-[100px]">
              Hands on
            </span>
          </span>
          <br />
          <span className="overflow-hidden inline-block">
            <span className="inline-block mentor-copy translate-y-[100px]">
              mentorship
            </span>
          </span>
        </h2>
        <p className="md:max-w-sm lg:max-w-lg my-4 lg:text-lg">
          <span className="overflow-hidden inline-block">
            <span className="inline-block mentor-copy translate-y-[100px]">
              If you're anywhere between your first line of code and your first
              job, I'd love to help you learn. Book a free 30 minutes call, then
              $250/month if it's a fit ⬇️
            </span>
          </span>
        </p>
        <span className="overflow-hidden inline-block">
          <span className="inline-block mentor-copy translate-y-[100px]">
            <BaseButton className="flex items-center">
              <>
                <span>Free intro sesh</span>
                <MdCheck size="24px" className="ml-2 text-white" />
              </>
            </BaseButton>
          </span>
        </span>
      </div>

      <div className="relative h-[250px] w-full max-w-[500px] mx-auto">
        <img
          src="loadingImg.jpg"
          className="bg-white shadow-xl w-28 h-28 rounded-full absolute top-8 -left-[14px] floating"
        />
        <span className="text-6xl absolute top-36 left-[50%] -translate-x-[50%]">
          🤝
        </span>
        <div
          className="bg-black shadow-xl w-28 h-28 rounded-full absolute top-20 right-4 floating grid place-items-center text-5xl"
          style={{
            animationDelay: "0.35s",
          }}
        >
          😃
        </div>
      </div>
    </section>
  );
}
