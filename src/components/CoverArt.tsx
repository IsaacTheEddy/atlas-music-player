import { useCurrentSongContext } from "./context";

export function CoverArt() {
  const { currentSong } = useCurrentSongContext();
  return (
    <>
      <img
        className="size-100 flex-1 rounded-2xl"
        src={currentSong.cover}
        alt="placeholder"
      />
    </>
  );
}
