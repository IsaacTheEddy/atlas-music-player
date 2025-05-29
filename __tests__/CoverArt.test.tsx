import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { useState } from "react";
import { CoverArt } from "../src/components/CoverArt";
import { currentSongContext } from "../src/components/context";
import { DataType } from "../src/components/App";

test("Image Loads correctly", () => {
  const context: DataType = {
    id: "a6pkp78whsyqdvpb5dxn64ss",
    cover: "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
  };
  const { container } = render(<CoverArt />);
  expect(container).toMatchSnapshot();
});

// test("Image Loads With text passed in", () => {
//   const context: DataType = {
//     cover: "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
//     title: "Fading Shadows",
//   };
//   const { container } = render(
//     <currentSongContext.Provider value={context}>
//       <CoverArt />
//     </currentSongContext.Provider>,
//   );
//   expect(container).toMatchSnapshot();
// });
// test("Image Loads correctly with undefined currentSong", () => {
//   const context: DataType = {};
//   const { container } = render(
//     <currentSongContext.Provider value={context}>
//       <CoverArt />
//     </currentSongContext.Provider>,
//   );
//   expect(container).toMatchSnapshot();
// });
