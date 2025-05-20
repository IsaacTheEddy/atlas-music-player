import React from "react";
import play from "../assets/play.svg";
import fastfoward from "../assets/fast-forward.svg";
import rewind from "../assets/rewind.svg";
import shuffle from "../assets/shuffle.svg";

function handleClick(info) {
  return alert(info);
}

export function PlayBack() {
  return (
    <div className="flex flex-row justify-around">
      <button onClick={() => handleClick("1x")}>
        <p className="text-5xl">1x</p>
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
