// MARK: Header
import React, { useState, createContext } from "react";

const ExampleContext = createContext();

export function ExampleProvider(props) {
  const [stateExample, setStateExample] = useState(null);

  function addSampleExample() {
    // Your code here
  }

  return (
    <ExampleContext.Provider
      value={{
        stateExample,
        setStateExample,
        addSampleExample,
      }}
      {...props}
    />
  );
}

export function useContextExample() {
  const context = React.useContext(ExampleContext);
  if (context === undefined) {
    throw new Error(`useContextExample must be used within a ExampleProvider`);
  }
  return context;
}
