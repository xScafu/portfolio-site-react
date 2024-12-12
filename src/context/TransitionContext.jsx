import React, { createContext } from "react";
import { useState } from "react";

const TransitionContext = createContext({ completed: false });

export const TransitionProvider = ({ children }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value) => {
    setCompleted(value);
    window.scrollTo(0, 0);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
