import React, { createContext, useState } from "react";

export const NavContext = createContext({ navOpen: false, setNavOpen: null });

const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const ctx = { navOpen, mobileNavOpen, setMobileNavOpen, setNavOpen };

  return <NavContext.Provider value={ctx}>{children}</NavContext.Provider>;
};

export default NavProvider;
