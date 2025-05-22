import React from "react";
import cover from "../assets/placeholder.svg";

export function CoverArt() {
  return (
    <img
      className="size-100 flex-1 rounded-2xl"
      src={cover}
      alt="placeholder"
    />
  );
}
