import React from "react";

export function Songs(props) {
  return (
    <div className="flex w-full flex-row">
      <div className="flex w-full flex-col">
        <h2>{props.title}</h2>
        <p>{props.artist}</p>
      </div>
      <div className="">
        <p>{props.duration}</p>
      </div>
    </div>
  );
}
