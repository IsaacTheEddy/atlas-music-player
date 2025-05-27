// import data from "../playlist.json";
import { Songs } from "./Songs";

import { useState, useEffect, useContext } from "react";

interface DataType {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

const PlayList = ({}) => {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const api = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/v1/playlist");
        if (!response.ok) {
          throw new Error("Error");
        }
        const jsonData: DataType[] = await response.json();
        setData(jsonData);
      } catch (e: any) {
        throw new Error("Error");
      }
    };
    api();
  }, []);

  return (
    <div className="flex w-100 flex-col">
      <div className="border-double max-md:border-t-8 dark:border-Mocha">
        <h1 className="justify-center border-Lightpink pb-5 font-sans text-2xl font-bold">
          Playlist
        </h1>
        {data.map((song: DataType) => {
          return (
            <div
              className="flex flex-row rounded-md hover:bg-Mocha"
              onClick={(e) => alert(song.title)}
            >
              <div className="flex w-full flex-col">
                <h2 className="font-sans font-medium">{song.title}</h2>
                <p className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
                  {song.artist}
                </p>
              </div>
              <div className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
                <p>{song.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayList;
