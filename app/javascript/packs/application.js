import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // eslint-disable-line import/no-extraneous-dependencies
import App from "../components/App";

require("../styles/app.css");

// eslint-disable-next-line no-undef
const container = document.getElementById("root");
const root = createRoot(container);

// eslint-disable-next-line no-undef
document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});
