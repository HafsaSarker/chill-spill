import React from "react";
import YouTubePlayer from "./YouTubePlayer";
import Controls from "./Controls";
import ChangeTheme from "./ChangeTheme";

function SideNav() {
  return (
    <div className="p-10 flex flex-col w-7/12 bg-transparent ">
      <YouTubePlayer />
      <Controls />
      <ChangeTheme />
    </div>
  );
}

export default SideNav;
