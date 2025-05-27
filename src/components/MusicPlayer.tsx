import { CoverArt } from "./CoverArt";
import { PlayBack } from "./PlaybackControls";
import SongHolder from "./SongHolder";
import { VolumeControl } from "./VolumeControls";
import { useEffect, useState } from "react";
import { DataType } from "./App";
import { useCurrentSongContext } from "./context";

export default function MusicPlayer() {
  const { currentSong, setCurrentSong } = useCurrentSongContext();
  useEffect(() => {
    const api = async () => {
      try {
        const response = await fetch(
          `http://localhost:5173/api/v1/songs/${currentSong.id}`,
        );
        if (!response.ok) {
          throw new Error("error");
        }
        let jsonData: DataType = await response.json();
        setCurrentSong(jsonData);
      } catch (e: any) {
        throw new Error("error");
      }
    };
    api();
  });
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
