// MARK: React
import { useState } from "react";

export function useHookExample() {
  // MARK: State Hooks
  const [example, setExample] = useState(null);

  function addExample() {
    // Your code here
  }

  // Return the hook variables.
  return {
    example,
    setExample,
    addExample,
  };
}
