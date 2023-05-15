import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import "./components/styles/styles.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
