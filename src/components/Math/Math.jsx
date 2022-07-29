import React from "react";
import style from "./index.module.css";

function Math({ children }) {
  return <p className={style.math}>{children}</p>;
}

export default Math;
