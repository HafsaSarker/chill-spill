import React from "react";
import ReactPlayer from "react-player";

function YouTubePlayer() {
  return (
    <div className="h-3/6 flex items-center justify-center">
      <ReactPlayer
        url={"https://youtu.be/irLvNpToN5U"}
        controls={true}
        width="100%"
        height="70%"
        loop={true}
        playsinline={true}
      />
    </div>
  );
}

export default YouTubePlayer;
