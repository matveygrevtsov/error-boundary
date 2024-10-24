import React, { useEffect } from "react";

import "./styles.css";

const DELAY_MS = 1000;

export const App = (): JSX.Element => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      (window as any) = 2;
    }, DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return <h1>Hello, world!</h1>;
};
