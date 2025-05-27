import React, { createContext, useContext } from "react";
import { DataType } from "./App";

interface CurrentSongContextType extends DataType {
  currentSong: DataType;
  setCurrentSong: React.Dispatch<React.SetStateAction<DataType>>;
  playlist: DataType[];
  setPlaylist: React.Dispatch<React.SetStateAction<DataType[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  playback: number;
  setPlayback: React.Dispatch<React.SetStateAction<number>>;
}

export const currentSongContext = createContext<
  CurrentSongContextType | undefined
>(undefined);

export function useCurrentSongContext() {
  const currentsong = useContext(currentSongContext);

  if (currentsong === undefined) {
    throw new Error("Use current song context correctly scrub");
  }
  return currentsong;
}
