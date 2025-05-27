import { error } from "console";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import PlayList from "./PlayList";
import { currentSongContext } from "./context";
// import { Skelton } from "./Skeleton/Skeleton";
import React, { use, useEffect, useState } from "react";

export interface DataType {
  id: string;
  title?: string;
  artist?: string;
  genre?: string;
  duration?: number;
  cover?: string;
  isPlaying?: boolean;
}

export const App: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<DataType>({
    id: "hdees11mmk6g078ewijlly1r",
    title: "",
    artist: "",
    genre: "",
    duration: 0,
    cover: "",
    isPlaying: true,
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0);
  const [playback, setPlayback] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);

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
  }, []);
  console.log(currentSong);

  return (
    <>
      <currentSongContext.Provider
        value={{
          currentSong,
          setCurrentSong,
          isPlaying,
          setIsPlaying,
          volume,
          setVolume,
          mute,
          setMute,
          playback,
          setPlayback,
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
