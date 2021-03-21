import React from "react";
import ReactDOM from "react-dom";
import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
//import { CounterApp } from "./components/01-useState/CounterApp";

ReactDOM.render(
  // <CounterApp />,
  <CounterWithCustomHook />,
  document.getElementById("root")
  );
