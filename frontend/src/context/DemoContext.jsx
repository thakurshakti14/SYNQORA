import { createContext, useContext, useState, useCallback } from "react";

const DemoContext = createContext(null);

export const DemoProvider = ({ children }) => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);
  const openTour = useCallback(() => setTourOpen(true), []);
  const closeTour = useCallback(() => setTourOpen(false), []);

  return (
    <DemoContext.Provider
      value={{ demoOpen, tourOpen, openDemo, closeDemo, openTour, closeTour }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
};
