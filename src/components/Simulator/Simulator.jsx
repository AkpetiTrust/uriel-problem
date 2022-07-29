import React, { useState, useEffect } from "react";
import { calculateValues } from "../../utils/functions";
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

  useEffect(() => {
    setValues(calculateValues(Number(number)));
  }, [number]);

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
        <section className={style.solution_area}>
          <p className={style.talk}>The values for x and y are:</p>
          <div className={style.values}>
            {values.map(({ x, y }, index) => (
              <span key={x}>
                ({x}, {y}){"  "}
                {index < values.length - 1 ? "," : ""}
                {"  "}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Simulator;
