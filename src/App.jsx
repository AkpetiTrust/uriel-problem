import React from "react";
import { useLocation } from "react-router-dom";
import { Problem, Simulator, Solutions, Tags } from "./components";

function App() {
  const location = useLocation();
  const pathsToComponents = {
    "/": <Problem />,
    "/problem": <Problem />,
    "/solutions": <Solutions />,
    "/simulator": <Simulator />,
  };

  const component = pathsToComponents[location.pathname] || <div></div>;

  return (
    <>
      <section className="main">
        <h1>The Uriel Problem</h1>
        <Tags />
        {component}
      </section>
      <footer>
        <p>
          Modeled by{" "}
          <a href="https://trust-akpeti.com" target="_blank">
            Akpeti Trust
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
