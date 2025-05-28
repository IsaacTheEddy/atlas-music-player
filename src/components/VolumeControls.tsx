import React, { useState } from "react";
import { useCurrentSongContext } from "./context";

export function VolumeControl() {
  const { volume, setVolume } = useCurrentSongContext();
  const { mute, setMute } = useCurrentSongContext();

  const handleRangeChange = (event: any) => {
    setVolume(event.target.value);
  };

  const handleMute = () => {
    if (mute === false) {
      setMute(true);
    } else if (mute === true) {
      setMute(false);
    }
  };

  return (
    <div className="mt-2.5 flex flex-row justify-between">
      <button onClick={() => handleMute()}>
        {mute === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-7"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
            <line x1="22" x2="16" y1="9" y2="15" />
            <line x1="16" x2="22" y1="9" y2="15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-7"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
            <path d="M16 9a5 5 0 0 1 0 6" />
            <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
          </svg>
        )}
      </button>
      {mute === true ? (
        <>
          <input
            disabled
            className="ml-0 w-90/100 justify-self-center accent-Mocha ease-in-out dark:accent-Lightsoftie/75"
            type="range"
            name=""
            value={volume}
            min="0"
            max="10"
            onChange={handleRangeChange}
          />
          <p>{volume}</p>
        </>
      ) : (
        <>
          <input
            className="ml-0 w-90/100 justify-self-center accent-Mocha ease-in-out dark:accent-Lightsoftie/75"
            type="range"
            name=""
            value={volume}
            min="0"
            max="10"
            onChange={handleRangeChange}
          />
          <p>{volume}</p>
        </>
      )}
    </div>
  );
}
