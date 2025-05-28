import { CoverArt } from "./CoverArt";
import { PlayControls } from "./PlayControls";
import SongTitle from "./SongTitle";
import { VolumeControl } from "./VolumeControls";
import { AudioPlayer } from "./AudioPlayer";
import { useEffect, useState, useRef } from "react";
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
      <SongTitle />
      <PlayControls />
      <VolumeControl />
      <AudioPlayer />
    </div>
  );
}
