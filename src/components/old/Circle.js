import React from "react";

const Circle = ({ size }) => {
  const s = size || 100;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-circle"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#151515"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};

export default Circle;
