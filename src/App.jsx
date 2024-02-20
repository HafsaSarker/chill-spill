import SideNav from "./components/SideNav";
import Timer from "./components/Timer";
import bgThemes from "./utils/bgThemes";
import { useContext, useState } from "react";
import "./App.css";
import { BgImageContext } from "./context/BgImageContext";

function App() {
  const { currentImageIndex } = useContext(BgImageContext);
  return (
    <div
      style={{
        backgroundImage: `url(${bgThemes[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "background-image 0.3s linear ",
      }}
    >
      <div className="backdrop-blur-sm bg-black bg-opacity-10 flex flex-row h-full w-full">
        <SideNav />
        <Timer />
      </div>
    </div>
  );
}

export default App;
