import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import InfoContainer from "./Provider/InfoContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoContainer>
      <App />
    </InfoContainer>
  </React.StrictMode>
);
