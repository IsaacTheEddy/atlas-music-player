import { useCurrentSongContext } from "./context";

const SongHolder = () => {
  const { currentSong, duration } = useCurrentSongContext();
  return (
    <div className="flex-nowrap pt-6">
      <h2 className="font-sans text-2xl font-bold">{currentSong.title}</h2>
      <p className="font-sans font-bold text-Mocha/75 dark:text-Lightsoftie/75">
        {currentSong.artist}
      </p>
      <div>{duration}</div>
    </div>
  );
};

export default SongHolder;
