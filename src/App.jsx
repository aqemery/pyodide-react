import { useState } from "react";
import "./App.css";

import { Pyodide } from "./pyodide";

function App() {
  const [pyprompt, setPyprompt] = useState('print("hello world!")');
  const [pyoutput, setPyoutput] = useState(null);
  const pyodide = Pyodide.getInstance();

  return (
    <>
      <h1>Vite + React + Pyodide</h1>
      <div>
        <textarea
          style={{
            width: "100%",
            height: "200px",
            fontFamily: "monospace",
            fontSize: "1rem",
          }}
          value={pyprompt}
          onChange={(e) => {
            setPyprompt(e.target.value);
            console.log(e.target.value);
          }}
        ></textarea>

        <button
          onClick={() => {
            pyodide.setOutput((text) => {
              setPyoutput(text);
            });
            console.log("clicked", pyprompt);
            pyodide.run(pyprompt);
          }}
        >
          Run
        </button>

        <p>Ouput:</p>
        <code>{pyoutput}</code>
      </div>
    </>
  );
}

export default App;
