import React from "react";

export function PlayListSkel() {
  return (
    <div className="flex w-100 flex-col">
      <div className="border-double max-md:border-t-8 dark:border-Mocha">
        <div role="status" className="max-w-lg animate-pulse">
          <div></div>
        </div>
      </div>
    </div>
  );
}
