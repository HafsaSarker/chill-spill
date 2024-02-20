import React, { useState } from "react";
import Rain from "./controlAudios/Rain";
import Bird from "./controlAudios/Bird";
import Campfire from "./controlAudios/Campfire";
import Noise from "./controlAudios/Noise";
import Waves from "./controlAudios/Waves";
import Wind from "./controlAudios/Wind";

function Controls() {
  return (
    <div className="border h-4/6 flex flex-col items-center justify-center gap-5 rounded-xl max-w-[500px]">
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
