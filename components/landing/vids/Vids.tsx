import BaseButton from "components/buttons/BaseButton";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import {
  useInView,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { MdCode } from "react-icons/md";
import { Code } from "components/code/Code";

export default function Vids() {
  const [code, setCode] = useState("");
  const timeoutRef = useRef(null);

  const copyRef = useRef(null);
  const isInView = useInView(copyRef, { margin: "-200px", once: true });

  useEffect(() => {
    typeInAnim(1);
    // @ts-ignore
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    isInView && triggerEnterAnim();
  }, [isInView]);

  const triggerEnterAnim = () => {
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

  const typeInAnim = (i: number) => {
    setCode(codeBlock.slice(0, i));

    const time = 40;

    if (i < codeBlock.length) {
      //@ts-ignore
      timeoutRef.current = setTimeout(() => {
        typeInAnim(i + 1);
      }, time);
    } else {
      //@ts-ignore
      timeoutRef.current = setTimeout(() => {
        typeInAnim(1);
      }, time);
    }
  };

  return (
    <section className="w-full px-4 lg:px-12 py-24 lg:py-36 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 overflow-hidden">
      <div className="relative w-full md:w-1/2">
        <img
          src="sm-code-gif.gif"
          alt="An example code tutorial video"
          className="bg-black w-[120px] md:w-[150px] h-auto absolute -top-12 -right-4 md:-right-6 shadow-xl rotate-2 rounded-md"
        />

        <div className="bg-[#292E3E] overflow-hidden max-h-[300px] h-[300px] md:max-h-[450px] md:h-[450px] rounded-lg p-2 py-4">
          <Code lang="css" code={code} />
        </div>
      </div>

      <div ref={copyRef} className="h-fit relative w-full md:w-1/2">
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

const codeBlock = `
.content {
    text-align: center;
    background: rgba(255, 255, 255, 0.25);
    color: white;
    padding: 5em 3em;
    position: relative;
    display: grid;
    align-content: center;

    transition: transform 1s;

    transform-style: preserve-3d;
}

.content::before {
    content: "";
    position: absolute;
    z-index: 10;
    inset: 0;
    border: 3px solid white;

    transform: translateZ(2rem);
}

        `;
