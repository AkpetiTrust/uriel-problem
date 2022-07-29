import React from "react";
import { Link } from "react-router-dom";
import Details from "../Details/Details";
import Math from "../Math/Math";
import style from "./index.module.css";

function Problem() {
  return (
    <div className={style.problem}>
      <p className={style.talk}>
        Given a natural number, <em>c</em>, what's the easiest way to
        systematically find two other natural numbers, <em>x</em> and <em>y</em>
        , such that:
      </p>
      <Math>
        𝒙 <sup>𝑦</sup> = 𝑪
      </Math>
      <Details />
      <div className={style.btn_group}>
        <Link to={"/simulator"}>Use Simulator</Link>
        <a
          href="https://wa.me/2348145049272?text='Hey%21%20I%20want%20to%20send%20in%20my%20solution%20to%20the%20Uriel%20Problem%20in%20form%20of%20a%20PDF%2C%20or%20a%20detailed%20text.'"
          target="_blank"
        >
          Send Solution
        </a>
      </div>
    </div>
  );
}

export default Problem;
