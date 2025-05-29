import { useCurrentSongContext } from "./context";

export default function Footer() {
  const year = new Date().getFullYear();
  const { isPlaying, shuffle, loading } = useCurrentSongContext();
  return (
    <div className="p-8 text-center">
      &copy; {year} Atlas School
      <div>
        {`${isPlaying.toString()} + ${shuffle.toString()} + ${loading.toString()}`}
      </div>
    </div>
  );
}
