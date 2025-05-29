import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import PlayListItem from "../src/components/PlayListItem";
import {
  currentSongContext,
  useCurrentSongContext,
} from "../src/components/context";

test("Testing for API song", () => {
  const pl = [
    {
      id: "cm3ixp4sy0thg0cmtdzukgg56",
      title: "Painted in Blue",
      artist: "Soul Canvas",
      genre: "Neo-Soul",
      duration: 194,
    },
    {
      id: "soammx6oibpan244my4toqke",
      title: "Tidal Drift",
      artist: "Echoes of the Sea",
      genre: "Ambient",
      duration: 191,
    },
    {
      id: "a6pkp78whsyqdvpb5dxn64ss",
      title: "Fading Shadows",
      artist: "The Emberlight",
      genre: "Alternative Rock",
      duration: 194,
    },
    {
      id: "hdees11mmk6g078ewijlly1r",
      title: "Cosmic Drift",
      artist: "Solar Flare",
      genre: "Psychedelic Rock",
      duration: 240,
    },
    {
      id: "sg9obf34n8qtnpq5t19w1b9a",
      title: "Urban Serenade",
      artist: "Midnight Groove",
      genre: "Jazz/Funk",
      duration: 162,
    },
    {
      id: "u7wkgyiyiz7xuxcueoxzb5d5",
      title: "Whispers in the Wind",
      artist: "Rust & Ruin",
      genre: "Folk",
      duration: 230,
    },
    {
      id: "kp4z671fsjcmuobji96z6p95",
      title: "Electric Fever",
      artist: "Neon Jungle",
      genre: "EDM",
      duration: 141,
    },
    {
      id: "ycvdpo1n76ap0x2u67gy9gab",
      title: "Electric Wildflower",
      artist: "Velvet Ember",
      genre: "Indie Pop",
      duration: 179,
    },
    {
      id: "jxjrthcu47rrpan548evirgu",
      title: "Golden Haze",
      artist: "Velvet Waves",
      genre: "Indie Pop",
      duration: 155,
    },
    {
      id: "kjy3ny0k1jt9p83srhdyg7mb",
      title: "Shatter the Silence",
      artist: "Thunderclap Echo",
      genre: "Rock",
      duration: 224,
    },
  ];
  let { container } = render(
    <currentSongContext.Provider
      value={{
        playlist: pl,
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
      <PlayListItem />
    </currentSongContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});
test("Passing undefined", () => {
  let { container } = render(
    <currentSongContext.Provider
      value={{
        playlist: [{}],
        currentSong: {
          id: "a6pkp78whsyqdvpb5dxn64ss",
          title: "Fading Shadows",
          artist: "The Emberlight",
          genre: "Alternative Rock",
          duration: 194,
          cover:
            "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
          song: "https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp",
          isPlaying: true,
        },
        loading: true,
      }}
    >
      <PlayListItem />
    </currentSongContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});
