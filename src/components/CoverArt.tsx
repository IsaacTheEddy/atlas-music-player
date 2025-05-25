import cover from "../assets/placeholder.svg";
import { useEffect } from "react";



export function CoverArt() {

  return (
    <>
      <img
        className="size-100 flex-1 rounded-2xl"
        src={cover}
        alt="placeholder"
      />
    </>
  );
}
