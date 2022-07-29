import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./index.module.css";

function Tag({ name }) {
  const location = useLocation();
  const path = "/" + name.toLowerCase();
  const currentPath = location.pathname;
  const tagIsActive =
    currentPath === path || (currentPath === "/" && name === "Problem");

  return (
    <Link
      className={`${style.tag} ${tagIsActive ? style.active : ""}`}
      to={path}
    >
      {name}
    </Link>
  );
}

export default Tag;
