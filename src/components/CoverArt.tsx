import { useCurrentSongContext } from "./context";
import placeholder from "../assets/placeholder.svg";
import { useState } from "react";

export const CoverArt = () => {
  const { currentSong, loading } = useCurrentSongContext();
  return (
    <>
      {loading === false ? (
        <img
          className="size-100 flex-1 rounded-2xl"
          src={placeholder}
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
};
export default CoverArt;
