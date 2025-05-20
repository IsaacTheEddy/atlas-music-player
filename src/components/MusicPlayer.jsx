import { CoverArt } from "./CoverArt";
import { PlayBack } from "./PlaybackControls";
import { SongHolder } from "./SongHolder";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col">
      <CoverArt />
      <SongHolder />
      <PlayBack />
    </div>
  );
}
