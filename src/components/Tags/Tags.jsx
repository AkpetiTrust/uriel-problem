import React from "react";
import Tag from "../Tag/Tag";
import style from "./index.module.css";

function Tags() {
  const tags = ["Problem", "Simulator", "Solutions"];

  return (
    <div className={style.tags}>
      {tags.map((tag) => (
        <Tag name={tag} key={tag} />
      ))}
    </div>
  );
}

export default Tags;
