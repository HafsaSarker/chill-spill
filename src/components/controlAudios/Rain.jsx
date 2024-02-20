import React, { useRef, useState } from "react";
import mute from "../../assets/icons/mute.png";
import volume from "../../assets/icons/volume.png";
import rainSound from "../../assets/controls/rain.mp3";

function Rain() {
  const [audioMute, setAudioMute] = useState(true);
  const [vol, setVol] = useState(0.5);
  const myRef = useRef();

  const startAudio = () => {
    setAudioMute(false);
    const audio = myRef.current;

    audio.loop = true;
    audio.volume = vol;
    audio.play();
  };

  const handleVolChange = (e) => {
    const volLevel = parseInt(e.target.value) / 10;

    const audio = myRef.current;
    audio.volume = volLevel;

    setVol(volLevel);
  };

  const pauseAudio = () => {
    setAudioMute(true);

    const audio = myRef.current;
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div className="flex flex-col items-start">
      <p>Rain</p>
      <div className="flex flex-row place-items-center gap-2">
        <audio ref={myRef} src={rainSound} />

        {audioMute ? (
          <button onClick={startAudio}>
            <img src={mute} width={20} />
          </button>
        ) : (
          <button onClick={pauseAudio}>
            <img src={volume} width={20} />
          </button>
        )}

        <input
          id="vol"
          type="range"
          min="0"
          max="10"
          step="1"
          name="vol"
          value={vol * 10}
          onChange={(e) => handleVolChange(e)}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Rain;
