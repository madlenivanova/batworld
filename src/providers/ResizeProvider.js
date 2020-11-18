import React, { useState, useEffect, createContext } from "react";

export const ResizeContext = createContext({
  mobile: false,
  addResizeCallback: null,
});

const ResizeProvider = ({ children }) => {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    resetMobile();
    typeof window === "object" &&
      window.addEventListener("resize", resetMobile);

    const cleanup = () => {
      typeof window === "object" &&
        window.removeEventListener("resize", resetMobile);
    };
    return cleanup;
  }, []);

  const resetMobile = () => {
    typeof window === "object" && setMobile(window.innerWidth < 768);
  };

  const addResizeCallback = callback => {
    typeof window === "object" && window.addEventListener("resize", callback);

    const cleanup = () => {
      typeof window === "object" &&
        window.removeEventListener("resize", callback);
    };
    return cleanup;
  };

  const ctx = {
    mobile,
    addResizeCallback,
  };
  return (
    <ResizeContext.Provider value={ctx}>{children}</ResizeContext.Provider>
  );
};

/* USAGE OF RESIZE FUNCTION IN COMPONENTS

  useEffect(() => {
    return addResizeCallback(onResize);
  }, []);

  OOOOR IF WE ONLY CARE WHETHER ITS MOBILE OR NOT

  useEffect(() => {
    resetMenu();
  }, [mobile]);

*/
export default ResizeProvider;
