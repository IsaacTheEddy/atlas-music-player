import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import SongTitle from "../src/components/SongTitle";
import {
  currentSongContext,
  useCurrentSongContext,
} from "../src/components/context";

test("Non empty Song Title, and Artist name passed in", () => {
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
      }}
    >
      <SongTitle />
    </currentSongContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});
test("empty Song Title, Non Empty Artist name passed in", () => {
  let { container } = render(
    <currentSongContext.Provider
      value={{
        playlist: [],
        currentSong: {
          id: "a6pkp78whsyqdvpb5dxn64ss",
          artist: "The Emberlight",
          genre: "Alternative Rock",
          duration: 194,
          cover:
            "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
          song: "https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp",
          isPlaying: false,
        },
      }}
    >
      <SongTitle />
    </currentSongContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});
test("empty Song Title, Empty Artist name passed in", () => {
  let { container } = render(
    <currentSongContext.Provider
      value={{
        playlist: [],
        currentSong: {
          id: "a6pkp78whsyqdvpb5dxn64ss",
          genre: "Alternative Rock",
          duration: 194,
          cover:
            "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
          song: "https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp",
          isPlaying: false,
        },
      }}
    >
      <SongTitle />
    </currentSongContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});
