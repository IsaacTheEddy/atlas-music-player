import React, { createContext, useContext } from "react";
import { DataType } from "./App";

interface CurrentSongContextType {
  playlist?: [];
  currentSong: DataType;
  setCurrentSong?: React.Dispatch<React.SetStateAction<DataType>>;
  currentSongIndex?: number;
  setCurrentSongIndex?: React.Dispatch<React.SetStateAction<number>>;
  setPlaylist?: React.Dispatch<React.SetStateAction<DataType[]>>;
  isPlaying?: boolean;
  setIsPlaying?: React.Dispatch<React.SetStateAction<boolean>>;
  shuffle?: boolean;
  setShuffle?: React.Dispatch<React.SetStateAction<boolean>>;
  mute?: boolean;
  setMute?: React.Dispatch<React.SetStateAction<boolean>>;
  volume?: number;
  setVolume?: React.Dispatch<React.SetStateAction<number>>;
  playback?: 0.5 | 1.0 | 2.0;
  setPlayback?: React.Dispatch<React.SetStateAction<0.5 | 1.0 | 2.0>>;
  duration?: number | undefined;
  setDuration?: React.Dispatch<React.SetStateAction<number | undefined>>;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  playNextSong?: () => void;
  playPreviousSong?: () => void;
}

export const currentSongContext = createContext<
  CurrentSongContextType | undefined
>(undefined);

export function useCurrentSongContext() {
  const currentsong = useContext(currentSongContext);

  if (!currentsong) {
    throw new Error("Use current song context correctly scrub");
  }
  return currentsong;
}
