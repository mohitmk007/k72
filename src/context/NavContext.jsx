// NavContext.js
import React, { useState } from "react";

// 1. Create context
import { NavContextData } from "./CreateContext";

const NavContext = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <NavContextData.Provider value={value}>
      {children}
    </NavContextData.Provider>
  );
};

export default NavContext;
