import { useCurrentSongContext } from "./context";

export function CoverArt() {
  const c = useCurrentSongContext();
  return (
    <>
      <img
        className="size-100 flex-1 rounded-2xl"
        src={c.currentSong.cover}
        alt="placeholder"
      />
    </>
  );
}
