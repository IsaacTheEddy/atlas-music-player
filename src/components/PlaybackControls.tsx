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
        <p className="text-2xl font-medium text-DarkChocalate dark:text-Lightsoftie">
          {playback}x
        </p>
      </button>
      <button onClick={() => handleClick("rewind")}>
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
          class="size-5 dark:fill-Lightpink dark:stroke-Lightsoftie"
        >
          <polygon points="11 19 2 12 11 5 11 19" />
          <polygon points="22 19 13 12 22 5 22 19" />
        </svg>
      </button>
      <button onClick={() => handleClick("play")}>
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
          class="size-5 dark:fill-Lightpink dark:text-Lightsoftie"
        >
          <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
      </button>
      <button onClick={() => handleClick("fastforward")}>
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
          class="size-5 dark:fill-Lightpink dark:text-Lightsoftie"
        >
          <polygon points="13 19 22 12 13 5 13 19" />
          <polygon points="2 19 11 12 2 5 2 19" />
        </svg>
      </button>
      <button onClick={() => handleClick("shuffle")}>
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
          class="size-5 dark:stroke-Lightsoftie"
        >
          <path d="m18 14 4 4-4 4" />
          <path d="m18 2 4 4-4 4" />
          <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
          <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
          <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
        </svg>
      </button>
    </div>
  );
}
