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
              job, I'd love to help you learn. Book a free 30 minute call, then
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

      <div className="relative h-[250px] w-full max-w-[500px] mx-auto mb-8 lg:mb-0">
        <MeArrow />
        <YouArrow />
        <img
          src="loadingImg.jpg"
          className="bg-white shadow-xl w-28 h-28 rounded-full absolute top-8 -left-[14px] floating z-20"
        />

        <span className="text-7xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          🤝
        </span>
        <div
          className="bg-input shadow-xl w-28 h-28 rounded-full absolute top-20 right-4 floating grid place-items-center text-5xl"
          style={{
            animationDelay: "0.5s",
          }}
        >
          😃
        </div>
      </div>
    </section>
  );
}

const MeArrow = () => {
  return (
    <svg
      width="164"
      height="69"
      viewBox="0 0 164 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -top-6 left-[50%] -translate-x-[50%]"
    >
      <path
        d="M163 51.5526C140.954 36.8011 118.079 25.9999 78.7061 26C54.0663 26.0001 17.2651 48.2753 3 64"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M2.28711 45.6426C2.28711 52.5571 2.28711 59.4717 2.28711 66.3862C2.28711 66.7233 2.28963 66.8408 2.61293 66.5763C4.19181 65.2844 5.91276 64.3217 7.82598 63.5896C13.7585 61.3194 20.1791 60.5782 26.4789 60.3043"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M48.2773 20.3652C48.2773 16.2095 48.3178 12.0631 48.6368 7.9161C48.729 6.71644 48.2766 3.01525 49.4536 2.42676"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M49.4541 2.13281C49.5896 4.57155 52.7071 5.73434 53.277 8.01426"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M53.2764 8.01402C53.4017 6.76053 54.5198 5.49357 54.9755 4.32178C55.3268 3.41836 55.6892 2.47972 55.923 1.54443"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M55.9229 1.54443C55.9229 5.21098 56.9938 8.34441 58.5368 11.6409C59.071 12.782 59.5225 14.0288 60.3176 15.0227C60.6858 15.483 60.9221 15.6512 60.9221 16.248"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M68.8625 11.2491C70.8623 11.2491 73.9941 10.8188 74.7113 8.48807C75.6268 5.51249 68.575 4.80476 66.804 5.13891C65.1329 5.45422 65.0665 7.92321 65.0396 9.25592C64.9804 12.1826 65.0721 14.3291 67.4085 16.3627C70.7557 19.2759 74.7224 18.895 78.861 18.895"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const YouArrow = () => {
  return (
    <svg
      width="164"
      height="71"
      viewBox="0 0 164 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-3 left-[50%] rotate-6 -translate-x-[50%]"
    >
      <path
        d="M0.999998 17.1686C23.0461 31.9201 45.9208 42.7213 85.2939 42.7212C109.934 42.7211 146.735 20.4459 161 4.72119"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M161.713 23.0786C161.713 16.1641 161.713 9.24954 161.713 2.335C161.713 1.99785 161.71 1.88043 161.387 2.14494C159.808 3.43675 158.087 4.39945 156.174 5.13159C150.241 7.40179 143.821 8.14299 137.521 8.4169"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M68.1162 52.4204C69.0549 54.2038 70.3542 55.6577 71.7142 57.1223C72.1403 57.5812 73.0179 58.5442 73.2678 59.0439"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M73.2686 59.0439C74.3585 56.864 75.5952 54.1415 77.3163 52.4204"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M73.2686 60.8838C73.2686 63.8503 73.6365 66.7701 73.6365 69.7151"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M85.779 56.8359C82.4103 56.8359 81.3633 56.6173 81.3633 60.4338C81.3633 63.9336 81.7965 64.8997 85.227 66.2191C87.3342 67.0296 89.5382 65.7768 90.1946 63.6433C90.6688 62.1024 90.691 60.6206 90.1946 59.0437C89.951 58.2698 89.3964 56.0688 88.7227 55.7319"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M97.1865 56.836C97.1865 61.0229 98.9002 65.8325 104.178 64.3999C106.742 63.7039 111.706 59.1128 109.698 56.1001"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M110.065 58.6758C110.065 60.7064 110.065 62.7371 110.065 64.7678C110.065 66.8374 110.659 66.4032 112.641 66.4032"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
