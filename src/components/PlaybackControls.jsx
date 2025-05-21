import React, { useState } from "react";
import play from "../assets/play.svg";
import fastfoward from "../assets/fast-forward.svg";
import rewind from "../assets/rewind.svg";
import shuffle from "../assets/shuffle.svg";

function handleClick(info) {
  return alert(info);
}

export function PlayBack() {
  const [playback, setPlayback] = useState(1);

  const handlePlayback = (speed) => {
    if (speed === 1) {
      setPlayback(2);
    } else if (speed === 2) {
      setPlayback(0.5);
    } else if (speed === 0.5) {
      setPlayback(1);
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <button onClick={() => handlePlayback(playback)}>
        <p className="text-5xl font-medium">{playback}x</p>
      </button>
      <button onClick={() => handleClick("rewind")}>
        <img src={rewind} alt="" className="size-15" />
      </button>
      <button onClick={() => handleClick("play")}>
        <img src={play} alt="" className="size-15" />
      </button>
      <button onClick={() => handleClick("fastforward")}>
        <img src={fastfoward} alt="" className="size-15" />
      </button>
      <button onClick={() => handleClick("shuffle")}>
        <img src={shuffle} alt="" className="size-15" />
      </button>
    </div>
  );
}
