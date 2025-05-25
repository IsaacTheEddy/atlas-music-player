import { CoverArt } from "./CoverArt";
import { PlayBack } from "./PlaybackControls";
import { SongHolder } from "./SongHolder";
import { VolumeControl } from "./VolumeControls";

export default function MusicPlayer() {
  return (
    <div className="mx-auto flex flex-col">
      <CoverArt />
      <SongHolder />
      <PlayBack />
      <VolumeControl />
    </div>
  );
}
