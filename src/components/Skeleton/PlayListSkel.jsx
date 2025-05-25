import React from "react";
import { SongSkel } from "./SongsSkel";

export function PlayListSkel() {
  return (
    <div className="flex w-100 flex-col">
      <div className="border-double max-md:border-t-8 dark:border-Mocha">
        <div role="status" className="max-w-sm animate-pulse">
          <div className="mt-6 mb-4 h-5 w-25 rounded-full bg-KindaGray dark:bg-Mocha"></div>
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
          <SongSkel />
        </div>
      </div>
    </div>
  );
}
