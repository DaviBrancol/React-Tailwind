// MARK: React
import React from "react";

// MARK: Contexts
import { useContextExample } from "../context/useContextExample";

export function Home() {
  const { stateExample } = useContextExample();

  console.log(stateExample);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>Home</h1>
    </div>
  );
}
