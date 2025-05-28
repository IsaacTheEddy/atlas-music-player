import { useCurrentSongContext } from "./context";
import placeholder from "../assets/placeholder.svg";

export function CoverArt() {
  const { currentSong, loading } = useCurrentSongContext();
  return (
    <>
      {loading === true ? (
        <img
          className="size-100 flex-1 rounded-2xl"
          src={placeholder}
          alt="placeholder"
        />
      ) : (
        <img
          className="size-100 flex-1 rounded-2xl"
          src={currentSong.cover}
          alt="placeholder"
        />
      )}
    </>
  );
}
