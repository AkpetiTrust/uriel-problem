import React, { useState } from "react";
import style from "./index.module.css";

function Details() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${style.details} ${open ? style.open : ""}`}>
      <div
        className={style.head}
        onClick={() => {
          setOpen((prevValue) => !prevValue);
        }}
      >
        <p>Details</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.293 7.293C5.48053 7.10553 5.73484 7.00021 6 7.00021C6.26516 7.00021 6.51947 7.10553 6.707 7.293L10 10.586L13.293 7.293C13.3852 7.19749 13.4956 7.1213 13.6176 7.0689C13.7396 7.01649 13.8708 6.9889 14.0036 6.98775C14.1364 6.98659 14.2681 7.01189 14.391 7.06218C14.5139 7.11246 14.6255 7.18671 14.7194 7.2806C14.8133 7.37449 14.8875 7.48615 14.9378 7.60904C14.9881 7.73194 15.0134 7.86362 15.0123 7.9964C15.0111 8.12918 14.9835 8.2604 14.9311 8.3824C14.8787 8.50441 14.8025 8.61475 14.707 8.707L10.707 12.707C10.5195 12.8945 10.2652 12.9998 10 12.9998C9.73484 12.9998 9.48053 12.8945 9.293 12.707L5.293 8.707C5.10553 8.51947 5.00021 8.26516 5.00021 8C5.00021 7.73483 5.10553 7.48053 5.293 7.293V7.293Z"
            fill="#E4E2E2"
          />
        </svg>
      </div>
      <p className={style.inner}>
        The question this problem is asking is this: We know that 2 to the power
        of 3 is 8, but how do we solve for the values of 2 and 3, given only the
        number 8?
      </p>
    </div>
  );
}

export default Details;
