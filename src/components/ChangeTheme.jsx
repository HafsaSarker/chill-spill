import React, { useContext } from "react";
import { BgImageContext } from "../context/BgImageContext";

export default function ChangeTheme() {
  const { changeBackground } = useContext(BgImageContext);

  return (
    <div className="text-center pt-5 max-w-[500px]">
      <button
        className="bg-neutral-800 bg-opacity-40 py-1.5 px-4 rounded-xl "
        onClick={changeBackground}
      >
        Change Background
      </button>
    </div>
  );
}
