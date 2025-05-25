import React from "react";

export function VolumeControlSkel() {
  return (
    <div role="status" className="max-w-lg animate-pulse">
      <div className="flex flex-row justify-between">
        <div className="mt-6 mb-4 h-8 w-10 rounded-2xl bg-KindaGray dark:bg-Mocha"></div>
        <div className="mt-6 mb-4 ml-5 h-5 w-full self-center rounded-2xl bg-KindaGray dark:bg-Mocha"></div>
      </div>
    </div>
  );
}
