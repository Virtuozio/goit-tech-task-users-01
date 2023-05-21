import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import "./index.css";
import "@fontsource/montserrat";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-tech-task-users-01">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
