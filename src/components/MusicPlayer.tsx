import { CoverArt } from "./CoverArt";
import { PlayBack } from "./PlaybackControls";
import SongHolder from "./SongHolder";
import { VolumeControl } from "./VolumeControls";
import { AudioPlayer } from "./AudioPlayer";
import { useEffect, useState, useRef } from "react";
import { DataType } from "./App";
import { useCurrentSongContext } from "./context";

export default function MusicPlayer() {
  const { currentSong, setCurrentSong, setLoading } = useCurrentSongContext();
  const lastFetchId = useRef(null);

  useEffect(() => {
    if (lastFetchId.current !== currentSong.id) {
      lastFetchId.current = currentSong.id;
      fetch(`api/v1/songs/${currentSong.id}`)
        .then((response) => response.json())
        .then((data) => setCurrentSong(data))
        .then(() => setLoading(false));
    }
  }, [currentSong.id, setCurrentSong]);
  console.log(currentSong);

  return (
    <div className="mx-auto flex flex-col">
      <CoverArt />
      <SongHolder />
      <PlayBack />
      <VolumeControl />
      <AudioPlayer />
    </div>
  );
}
