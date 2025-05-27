import { CoverArt } from "./CoverArt";
import { PlayBack } from "./PlaybackControls";
import SongHolder from "./SongHolder";
import { VolumeControl } from "./VolumeControls";
import { useEffect, useState, useRef } from "react";
import { DataType } from "./App";
import { useCurrentSongContext } from "./context";

export default function MusicPlayer() {
  const { currentSong, setCurrentSong } = useCurrentSongContext();
  const lastFetchId = useRef(null);

  useEffect(() => {
    if (lastFetchId.current !== currentSong.id) {
      lastFetchId.current = currentSong.id;
      fetch(`http://localhost:5173/api/v1/songs/${currentSong.id}`)
        .then((response) => response.json())
        .then((data) => setCurrentSong(data));
    }
  }, [currentSong.id, setCurrentSong]);
  console.log(currentSong);

  return (
    <div className="mx-auto flex flex-col">
      <CoverArt />
      <SongHolder />
      <PlayBack />
      <VolumeControl />
    </div>
  );
}
