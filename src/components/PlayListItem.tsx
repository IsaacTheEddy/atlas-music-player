// import data from "../playlist.json";
import { currentSongContext, useCurrentSongContext } from "./context";

const PlayListItem = ({}) => {
  const { playlist, currentSong, setCurrentSong, setLoading, setIsPlaying } =
    useCurrentSongContext();

  const handleClick = (song: any) => {
    if (song.id !== currentSong.id) {
      setLoading?.(true);
      setCurrentSong?.(song);
      setIsPlaying?.(true);
    }
  };

  const songFormatter = (song: number | undefined) => {
    if (!song) {
      return;
    }
    const minutes = Math.floor((song % 3600) / 60);
    const seconds = song % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  if (!playlist) {
    return (
      <div className="flex w-100 flex-col">
        <div className="border-double max-md:border-t-8 dark:border-Mocha">
          <h1 className="justify-center border-Lightpink pb-5 font-sans text-2xl font-bold">
            Playlist
          </h1>
        </div>
      </div>
    );
  } else {
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
                      <p>{songFormatter(song.duration)}</p>
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
                      <p>{songFormatter(song.duration)}</p>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    );
  }
};

export default PlayListItem;
