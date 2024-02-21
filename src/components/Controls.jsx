import React, { useState } from "react";
import Rain from "./controlAudios/Rain";
import Bird from "./controlAudios/Bird";
import Campfire from "./controlAudios/Campfire";
import Noise from "./controlAudios/Noise";
import Waves from "./controlAudios/Waves";
import Wind from "./controlAudios/Wind";

function Controls() {
  return (
    <div className="h-4/6 w-full flex flex-col items-center justify-center sm:gap-4 lg:gap-5  rounded-xl max-w-[500px] bg-neutral-800 bg-opacity-40 font-medium ">
      <p>Sound Panel</p>
      <Rain />
      <Noise />
      <Campfire />
      <Bird />
      <Waves />
      <Wind />
    </div>
  );
}

export default Controls;
