import React from "react";
import YouTubePlayer from "./YouTubePlayer";
import Controls from "./Controls";
import ChangeTheme from "./ChangeTheme";

function SideNav() {
  return (
    <div className="p-10 lg:p-10 xl:p-15 flex flex-col md:w-7/12 sm:w-5/12 items-center bg-transparent ">
      <YouTubePlayer />
      <Controls />
      <ChangeTheme />
    </div>
  );
}

export default SideNav;
