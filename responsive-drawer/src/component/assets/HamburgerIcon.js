import React from "react";

const HamburgerIcon = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="20"
      viewBox="0 0 27 20"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth="2px"
    >
      <g transform="translate(-314.5 -35.5)">
        <line className="a" x2="25" transform="translate(315.5 36.5)" />
        <line className="a" x2="25" transform="translate(315.5 45.5)" />
        <line className="a" x2="25" transform="translate(315.5 54.5)" />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
