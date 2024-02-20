import React from "react";
import ReactPlayer from "react-player";

function YouTubePlayer() {
  return (
    <div className="h-3/6 flex items-center justify-center max-w-[500px]">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=5uKewJH8H-s&t=97s"}
        controls={true}
        width="100%"
        height="70%"
        loop={true}
      />
    </div>
  );
}

export default YouTubePlayer;
