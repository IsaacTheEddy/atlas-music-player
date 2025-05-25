import React from "react";

export function SongSkel() {
  return (
    <>
      <div className="flex flex-row">
        <div className="mb-5 flex w-full flex-col">
          <div className="mb-3 h-2 w-50 rounded-full bg-KindaGray dark:bg-Mocha"></div>
          <div className="h-2 w-25 rounded-full bg-KindaGray dark:bg-Mocha"></div>
        </div>
        <div className="h-2 w-20 rounded-full bg-KindaGray dark:bg-Mocha"></div>
      </div>
    </>
  );
}
