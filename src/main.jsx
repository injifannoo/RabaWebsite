import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import App from "./App";
import "./styles/index.css"; // Import Tailwind CSS here
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);