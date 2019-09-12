import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ProgressCircle from "./circle-progress";

function App() {
  return (
    <div className="App">
      <ProgressCircle total={100} current={70}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
