import React, { useState } from "react";
import volume from "../assets/volume-2.svg";
import muted from "../assets/volume-x.svg";

function handleClick(info) {
  return alert(info);
}

export function VolumeControl() {
  const [range, setRange] = useState(5);
  const [mute, setMute] = useState(false);

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const handleMute = (mute) => {
    if (mute === false) {
      alert(`Mute is ${mute}`);
      setMute(true);
    } else if (mute === true) {
      alert(`Mute is  ${mute}`);
      setMute(false);
    }
  };

  return (
    <div className="mt-2.5 flex flex-row justify-between">
      <button onClick={() => handleMute(mute)}>
        {mute === false ? (
          <img src={muted} alt="" className="size-15" />
        ) : (
          <img src={volume} alt="" className="size-15" />
        )}
      </button>
      <input
        className="ml-0 w-90/100 justify-self-center accent-stone-500/50 ease-in-out"
        type="range"
        name=""
        value={range}
        min="0"
        max="10"
        onChange={handleRangeChange}
      />
      <p>{mute}</p>
    </div>
  );
}
