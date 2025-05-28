import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import PlayList from "./PlayList";
import { currentSongContext } from "./context";
import { Skelton } from "./Skeleton/Skeleton";
import React, { useEffect, useState } from "react";

export interface DataType {
  id?: string;
  title?: string;
  artist?: string;
  genre?: string;
  duration?: number;
  cover?: string;
  song?: string;
  isPlaying?: boolean;
}
const PAGE_SIZE = 1;

export const App: React.FC = () => {
  const [playlist, setPlaylist] = useState<DataType[]>([]);
  const [currentSong, setCurrentSong] = useState<DataType>({
    id: "hdees11mmk6g078ewijlly1r",
    title: "",
    artist: "",
    genre: "",
    duration: 0,
    cover: "",
    isPlaying: false,
    song: "",
  });
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(5);
  const [playback, setPlayback] = useState<0.5 | 1 | 2>(1);
  const [shuffle, setShuffle] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | undefined>(undefined);

  useEffect(() => {
    const api = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/v1/playlist");
        if (!response.ok) {
          throw new Error("Error there");
        }
        const jsonData: DataType[] = await response.json();
        setPlaylist(jsonData);
        if (jsonData.length > 0) {
          setCurrentSong(jsonData[0]);
          setCurrentSongIndex(0);
          setLoading(false);
        }
      } catch (e: any) {
        throw new Error("Error here");
      } finally {
        setLoading(false);
      }
    };
    api();
  }, []);

  const playNextSong = () => {
    if (playlist.length === 0) return;
    const nextIndex = currentSongIndex + 1;
    if (
      nextIndex < playlist.length &&
      currentSong.id !== playlist[nextIndex].id
    ) {
      setLoading(true);
      setCurrentSongIndex(nextIndex);
      setCurrentSong(playlist[nextIndex]);
      setIsPlaying(true);
    } else if (nextIndex === 10) {
      setLoading(true), setCurrentSongIndex(0);
      setCurrentSong(playlist[0]);
      setIsPlaying(true);
    } else {
      setLoading(true);
      setCurrentSongIndex(nextIndex + 1);
      setCurrentSong(playlist[nextIndex + 1]);
      setIsPlaying(true);
    }
  };

  const playPreviousSong = () => {
    if (playlist.length === 0) return;

    const prevIndex = currentSongIndex - 1;
    if (prevIndex > -1 && currentSong.id !== playlist[prevIndex].id) {
      setLoading(true);
      setCurrentSongIndex(prevIndex);
      setCurrentSong(playlist[prevIndex]);
      setIsPlaying(true);
    } else if (prevIndex === -1) {
      setLoading(true);
      setCurrentSongIndex(9);
      setCurrentSong(playlist[9]);
      setIsPlaying(true);
    } else {
      setLoading(true);
      setCurrentSongIndex(prevIndex - 1);
      setCurrentSong(playlist[prevIndex - 1]);
      setIsPlaying(true);
    }
  };

  return (
    <>
      <currentSongContext.Provider
        value={{
          playlist,
          currentSong,
          setCurrentSong,
          currentSongIndex,
          setCurrentSongIndex,
          isPlaying,
          setIsPlaying,
          volume,
          setVolume,
          mute,
          setMute,
          playback,
          setPlayback,
          playNextSong,
          playPreviousSong,
          shuffle,
          setShuffle,
          duration,
          setDuration,
          loading,
          setLoading,
        }}
      >
        <div className="flex h-full min-h-screen flex-col bg-KindaGray dark:bg-DarkChocalate dark:text-white">
          <div className="mx-auto flex flex-col rounded-2xl border-8 border-double border-Mocha md:flex-row">
            <div className="min-h-80% flex h-fit flex-col justify-between rounded-es-lg border-Lightpink p-4 md:border-r-4 dark:border-Mocha">
              <MusicPlayer />
            </div>
            <div className="min-h-80% flex h-fit flex-col justify-between p-4">
              <PlayList />
            </div>
          </div>
          <Footer />
        </div>
      </currentSongContext.Provider>
    </>
  );
};

export default App;
