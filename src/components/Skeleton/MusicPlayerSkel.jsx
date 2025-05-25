import React from "react";
import { SongHolderSkel } from "./SongHolderSkel";
import { CoverArtSkel } from "./CoverArtSkel";
import { PlayBackSkel } from "./PlayBackSkel";
import { VolumeControlSkel } from "./VolumeControlSkel";

export default function MusicPlayer() {
  return (
    <div className="mx-auto flex flex-col">
      <CoverArtSkel />
      <SongHolderSkel />
      <PlayBackSkel />
      <VolumeControlSkel />
    </div>
  );
}
