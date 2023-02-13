import BaseButton from "components/buttons/BaseButton";
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "framer-motion";
import { MdCode } from "react-icons/md";

export default function Vids() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px", once: true });

  useEffect(() => {
    isInView && triggerAnim();
  }, [isInView]);

  const triggerAnim = () => {
    anime({
      targets: ".vids-copy",
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
    <section className="w-full px-4 lg:px-12 py-12 lg:py-36 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* TODO: Add code snippet thing */}
      <div className="w-full h-[100vh]"></div>

      <div ref={ref} className="h-fit relative md:sticky md:top-[150px]">
        <h2 className="font-bold text-5xl md:text-6xl">
          <span className="overflow-hidden inline-block">
            <span className="inline-block vids-copy translate-y-[100px]">
              Videos &
            </span>
          </span>
          <br />
          <span className="overflow-hidden inline-block">
            <span className="inline-block vids-copy translate-y-[100px]">
              Source Code
            </span>
          </span>
        </h2>
        <p className="md:max-w-sm lg:max-w-lg my-4 lg:text-lg">
          <span className="overflow-hidden inline-block">
            <span className="inline-block vids-copy translate-y-[100px]">
              You can find just about everything from my TikTok, YouTube, and
              Instagram here, complete with in depth write-up's and full source
              code.
            </span>
          </span>
        </p>
        <span className="overflow-hidden inline-block">
          <span className="inline-block vids-copy translate-y-[100px]">
            <BaseButton className="flex items-center">
              <>
                <span>Learn stuff</span>
                <MdCode size="24px" className="ml-2 text-white" />
              </>
            </BaseButton>
          </span>
        </span>
      </div>
    </section>
  );
}
