import { useCurrentSongContext } from "./context";

const SongTitle = () => {
  const { currentSong } = useCurrentSongContext();
  return (
    <div className="flex-nowrap pt-6">
      <h2 className="font-sans text-2xl font-bold">
        {currentSong.title ? currentSong.title : "Song Title"}
      </h2>
      <p className="font-sans font-bold text-Mocha/75 dark:text-Lightsoftie/75">
        {currentSong.artist ? currentSong.artist : "Artist"}
      </p>
    </div>
  );
};

export default SongTitle;
