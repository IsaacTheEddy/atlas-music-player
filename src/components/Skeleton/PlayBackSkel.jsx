import React from "react";

export function PlayBackSkel() {
  return (
    <div role="status" className="max-w-lg animate-pulse">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="mt-6 mb-4 h-10 w-10 rounded-2xl bg-KindaGray dark:bg-Mocha"></div>
        <div className="mt-6 mb-4 h-10 w-10 rounded-2xl bg-KindaGray dark:bg-Mocha"></div>
        <div className="mt-6 mb-4 h-10 w-10 rounded-2xl bg-KindaGray dark:bg-Mocha"></div>
        <div className="mt-6 mb-4 h-10 w-10 rounded-2xl bg-KindaGray dark:bg-Mocha"></div>
        <div className="mt-6 mb-4 h-10 w-10 rounded-2xl bg-KindaGray dark:bg-Mocha"></div>
      </div>
    </div>
  );
}
