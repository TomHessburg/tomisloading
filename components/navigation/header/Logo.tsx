import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <svg
        width="133"
        height="35"
        viewBox="0 0 133 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-6 flex-shrink-0 hidden md:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.299 5.02512C13.0348 5.00846 12.7684 5 12.5 5C5.59644 5 0 10.5964 0 17.5C0 24.4036 5.59644 30 12.5 30C12.7684 30 13.0348 29.9915 13.299 29.9749C9.47796 27.1519 7 22.6153 7 17.5C7 12.3847 9.47796 7.84807 13.299 5.02512Z"
          fill="#5726E4"
        />
        <circle cx="31.5" cy="17.5" r="17.5" fill="black" />
        <path
          d="M71.672 16.836C72.8667 17.116 73.7907 17.6947 74.444 18.572C75.116 19.4307 75.452 20.4293 75.452 21.568C75.452 23.304 74.8733 24.648 73.716 25.6C72.5773 26.5333 70.9347 27 68.788 27H58.4V7.176H68.508C70.524 7.176 72.1107 7.61467 73.268 8.492C74.4253 9.36933 75.004 10.648 75.004 12.328C75.004 13.4853 74.696 14.4653 74.08 15.268C73.4827 16.052 72.68 16.5747 71.672 16.836ZM64.616 14.904H67.024C67.584 14.904 67.9947 14.792 68.256 14.568C68.536 14.344 68.676 13.9987 68.676 13.532C68.676 13.0467 68.536 12.692 68.256 12.468C67.9947 12.2253 67.584 12.104 67.024 12.104H64.616V14.904ZM67.444 22.016C68.004 22.016 68.4147 21.9133 68.676 21.708C68.956 21.484 69.096 21.1293 69.096 20.644C69.096 19.692 68.5453 19.216 67.444 19.216H64.616V22.016H67.444ZM83.7566 6.28V27H77.5406V6.28H83.7566ZM85.7241 19.104C85.7241 17.4427 86.0041 16.0053 86.5641 14.792C87.1427 13.56 87.9267 12.6267 88.9161 11.992C89.9054 11.3387 91.0161 11.012 92.2481 11.012C93.2747 11.012 94.1614 11.2267 94.9081 11.656C95.6547 12.0667 96.2241 12.636 96.6161 13.364V11.208H102.804V27H96.6161V24.844C96.2241 25.572 95.6547 26.1507 94.9081 26.58C94.1614 26.9907 93.2747 27.196 92.2481 27.196C91.0161 27.196 89.9054 26.8787 88.9161 26.244C87.9267 25.5907 87.1427 24.6573 86.5641 23.444C86.0041 22.212 85.7241 20.7653 85.7241 19.104ZM96.6161 19.104C96.6161 18.264 96.4014 17.6107 95.9721 17.144C95.5427 16.6773 94.9921 16.444 94.3201 16.444C93.6481 16.444 93.0974 16.6773 92.6681 17.144C92.2387 17.6107 92.0241 18.264 92.0241 19.104C92.0241 19.944 92.2387 20.5973 92.6681 21.064C93.0974 21.5307 93.6481 21.764 94.3201 21.764C94.9921 21.764 95.5427 21.5307 95.9721 21.064C96.4014 20.5973 96.6161 19.944 96.6161 19.104ZM112.623 27.196C111.13 27.196 109.805 26.9533 108.647 26.468C107.509 25.9827 106.603 25.3107 105.931 24.452C105.259 23.5933 104.877 22.6227 104.783 21.54H110.747C110.822 22.0067 111.018 22.352 111.335 22.576C111.671 22.8 112.091 22.912 112.595 22.912C112.913 22.912 113.165 22.8467 113.351 22.716C113.538 22.5667 113.631 22.3893 113.631 22.184C113.631 21.8293 113.435 21.5773 113.043 21.428C112.651 21.2787 111.989 21.1107 111.055 20.924C109.917 20.7 108.974 20.4573 108.227 20.196C107.499 19.9347 106.855 19.4867 106.295 18.852C105.754 18.2173 105.483 17.34 105.483 16.22C105.483 15.2493 105.735 14.372 106.239 13.588C106.762 12.7853 107.527 12.16 108.535 11.712C109.543 11.2453 110.766 11.012 112.203 11.012C114.331 11.012 115.993 11.5347 117.187 12.58C118.401 13.6253 119.129 14.988 119.371 16.668H113.855C113.762 16.2387 113.566 15.912 113.267 15.688C112.969 15.4453 112.567 15.324 112.063 15.324C111.746 15.324 111.503 15.3893 111.335 15.52C111.167 15.632 111.083 15.8093 111.083 16.052C111.083 16.3693 111.279 16.612 111.671 16.78C112.063 16.9293 112.689 17.088 113.547 17.256C114.686 17.48 115.647 17.732 116.431 18.012C117.215 18.292 117.897 18.7773 118.475 19.468C119.054 20.14 119.343 21.0733 119.343 22.268C119.343 23.2013 119.073 24.0413 118.531 24.788C117.99 25.5347 117.206 26.1227 116.179 26.552C115.171 26.9813 113.986 27.196 112.623 27.196ZM131.638 21.708V27H129.286C124.955 27 122.79 24.844 122.79 20.532V16.388H120.83V11.208H122.79V7.4H129.006V11.208H131.582V16.388H129.006V20.644C129.006 21.0173 129.09 21.288 129.258 21.456C129.445 21.624 129.743 21.708 130.154 21.708H131.638Z"
          fill="black"
        />
      </svg>
      <svg
        width="49"
        height="35"
        viewBox="0 0 49 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-4 flex-shrink-0 block md:hidden"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.299 5.02512C13.0348 5.00846 12.7684 5 12.5 5C5.59644 5 0 10.5964 0 17.5C0 24.4036 5.59644 30 12.5 30C12.7684 30 13.0348 29.9915 13.299 29.9749C9.47796 27.1519 7 22.6153 7 17.5C7 12.3847 9.47796 7.84807 13.299 5.02512Z"
          fill="#5726E4"
        />
        <circle cx="31.5" cy="17.5" r="17.5" fill="black" />
      </svg>
    </Link>
  );
}
