import React, { useState } from "react";
import ReactPlayer from "react-player";

function YouTubePlayer() {
  const [vidURL, setVidURL] = useState(
    "https://www.youtube.com/watch?v=5uKewJH8H-s&t=97s"
  );

  const changeURL = (e) => {
    e.preventDefault();
    setVidURL(vidURL);
  };

  return (
    <div className="h-3/6 flex flex-col gap-5 items-center justify-center max-w-[500px]">
      <form onSubmit={changeURL} className="w-full">
        <div>
          <label htmlFor="url" className="block mb-2 text-sm font-medium">
            Paste video url
          </label>
          <input
            type="text"
            id="url"
            name="vidURL"
            value={vidURL}
            onChange={(e) => setVidURL(e.target.value)}
            className="block w-full p-2 rounded-lg text-xs focus:outline-none bg-gray-400 bg-opacity-40"
          />
        </div>
      </form>

      <ReactPlayer
        url={vidURL}
        controls={true}
        width="100%"
        height="70%"
        loop={true}
      />
    </div>
  );
}

export default YouTubePlayer;
