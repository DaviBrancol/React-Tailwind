// MARK: React Imports
import React from "react";
import { hot } from "react-hot-loader";

// MARK: Router Import
import Routes from "./Router";

// MARK: Context Import
import { ExampleProvider } from "./context/useContextExample";

const App = () => (
  <ExampleProvider>
    <Routes />
  </ExampleProvider>
);

export default hot(module)(App);
