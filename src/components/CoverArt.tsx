import { useCurrentSongContext } from "./context";

export function CoverArt() {
  const { cover } = useCurrentSongContext();
  return (
    <>
      <img
        className="size-100 flex-1 rounded-2xl"
        src={cover}
        alt="placeholder"
      />
    </>
  );
}
