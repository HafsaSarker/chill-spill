import React from "react";
import YouTubePlayer from "./YouTubePlayer";
import Controls from "./Controls";

function SideNav() {
  return (
    <div className="flex flex-col w-5/12">
      <YouTubePlayer />
      <Controls />
    </div>
  );
}

export default SideNav;
