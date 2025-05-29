import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import { VolumeControl } from "../src/components/VolumeControls";
import {
  currentSongContext,
  useCurrentSongContext,
} from "../src/components/context";

test("If mute is enabled(mute = true)", () => {
  let { container } = render(
    <currentSongContext.Provider
      value={{
        playlist: [],
        currentSong: {
          id: "a6pkp78whsyqdvpb5dxn64ss",
          title: "Fading Shadows",
          artist: "The Emberlight",
          genre: "Alternative Rock",
          duration: 194,
          cover:
            "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
          song: "https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp",
          isPlaying: false,
        },
        mute: true,
      }}
    >
      <VolumeControl />
    </currentSongContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});
test("If mute is disabled (mute = false)", () => {
  let { container } = render(
    <currentSongContext.Provider
      value={{
        playlist: [],
        currentSong: {
          id: "a6pkp78whsyqdvpb5dxn64ss",
          title: "Fading Shadows",
          artist: "The Emberlight",
          genre: "Alternative Rock",
          duration: 194,
          cover:
            "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
          song: "https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp",
          isPlaying: false,
        },
        mute: true,
      }}
    >
      <VolumeControl />
    </currentSongContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});
