// import data from "../playlist.json";
import { currentSongContext, useCurrentSongContext } from "./context";

const PlayList = ({}) => {
  const { playlist, currentSong, setCurrentSong } = useCurrentSongContext();

  const handleClick = (song: any) => {
    setCurrentSong(song);
  };

  return (
    <div className="flex w-100 flex-col">
      <div className="border-double max-md:border-t-8 dark:border-Mocha">
        <h1 className="justify-center border-Lightpink pb-5 font-sans text-2xl font-bold">
          Playlist
        </h1>
        {playlist.map((song) => {
          if (song.id === currentSong.id) {
            return (
              <>
                <div
                  className="flex flex-row rounded-md bg-Mocha hover:bg-Mocha"
                  onClick={(e) => handleClick(song)}
                  key={song.id}
                >
                  <div className="flex w-full flex-col">
                    <h2 className="font-sans font-medium">{song.title}</h2>
                    <p className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
                      {song.artist}
                      {song.cover}
                    </p>
                  </div>
                  <div className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
                    <p>{song.duration}</p>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div
                  className="flex flex-row rounded-md hover:bg-Mocha"
                  onClick={(e) => handleClick(song)}
                  key={song.id}
                >
                  <div className="flex w-full flex-col">
                    <h2 className="font-sans font-medium">{song.title}</h2>
                    <p className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
                      {song.artist}
                      {song.cover}
                    </p>
                  </div>
                  <div className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
                    <p>{song.duration}</p>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PlayList;
