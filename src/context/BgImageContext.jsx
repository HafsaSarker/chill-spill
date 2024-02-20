import { createContext, useState } from "react";
import bgThemes from "../utils/bgThemes";

export const BgImageContext = createContext();

export const BgImageContextProvider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeBackground = () => {
    const nextIndex = (currentImageIndex + 1) % bgThemes.length;
    setCurrentImageIndex(nextIndex);
  };
  const value = {
    currentImageIndex,
    changeBackground,
  };
  return (
    <BgImageContext.Provider value={value}>{children}</BgImageContext.Provider>
  );
};
