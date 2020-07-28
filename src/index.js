// Configure the prototypes
import "./utils/protype/findAndPop";
import "./styles/main.css";
import "./styles/tailwind.css";

// MARK: React Imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

// MARK: App import
import App from "./App";

// Configure the dotenv
import dotenv from "dotenv";
dotenv.config();

// Render
ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById("root")
);
