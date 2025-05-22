import React from "react";

export function Songs(props) {
  return (
    <div className="flex flex-row">
      <div className="flex w-full flex-col">
        <h2 className="font-sans font-medium">{props.title}</h2>
        <p className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
          {props.artist}
        </p>
      </div>
      <div className="font-sans font-medium text-Mocha/75 dark:text-Lightsoftie/75">
        <p>{props.duration}</p>
      </div>
    </div>
  );
}
