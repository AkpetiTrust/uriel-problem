import React, { useState } from "react";
import Math from "../Math/Math";
import style from "./index.module.css";

function Simulator() {
  const [number, setNumber] = useState(8);
  const [width, setWidth] = useState(2);
  const [values, setValues] = useState([]);

  const limit = 15;

  const updateWidth = (valueLength) => {
    if (valueLength > 2) {
      setWidth(valueLength);
    } else {
      setWidth(2);
    }
  };

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const valueLength = value.length;
    updateWidth(valueLength);
    setNumber(value);
  };

  return (
    <div className={style.simulator}>
      <div className={style.input_area}>
        <Math>
          𝒙 <sup>𝑦</sup> =
        </Math>
        <input
          type="number"
          style={{ width: width < limit ? width + "ch" : limit + "ch" }}
          defaultValue={number}
          onChange={handleChange}
        />
      </div>
      {number && (
        <div className={style.solution_area}>
          <p className={style.talk}>The values for x and y are:</p>
        </div>
      )}
    </div>
  );
}

export default Simulator;
