import { useCurrentSongContext } from "./context";
import placeholder from "../assets/placeholder.svg";
import { useState } from "react";

export default function CoverArt() {
  const { currentSong, loading } = useCurrentSongContext();
  return (
    <>
      {loading === true ? (
        <img
          className="size-100 flex-1 rounded-2xl"
          src="placeholder.svg"
          alt="placeholder"
        />
      ) : (
        <img
          className="size-100 flex-1 rounded-2xl"
          src={currentSong.cover}
          alt={currentSong.title}
        />
      )}
    </>
  );
}
