import React from "react";
import data from "../playlist.json";
import { Songs } from "./Songs";

export function PlayList() {
  return (
    <div className="flex flex-col">
      <Songs title="Painted in Blue" artist="Soul Canvas" duration="5:55" />
      <Songs title="Tidal Drift" artist="Echoes of the Sea" duration="8:02" />
      <Songs title="Fading Shadows" artist="The Emberlight" duration="3:01" />
      <Songs title="Cosmic Drift" artist="Solar Flare" duration="5:01" />
      <Songs title="Urban Serenade" artist="Midnight Groove" duration="4:54" />
      <Songs
        title="Whispers in the Wind"
        artist="Rust & Ruin"
        duration="6:13"
      />
      <Songs title="Electric Fever" artist="Neon Jungle" duration="8:41" />
      <Songs
        title="Electric Wildflower"
        artist="Velvet Ember"
        duration="2:27"
      />
      <Songs title="Golden Haze" artist="Velvet Waves" duration="3:15" />
      <Songs
        title="Shatter the Silence"
        artist="Thunderclap Echo"
        duration="8:22"
      />
    </div>
  );
}
