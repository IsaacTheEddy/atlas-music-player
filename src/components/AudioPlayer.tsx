import React, { useEffect, useRef, useState } from "react";
import { useCurrentSongContext } from "./context";

type Props = {};

export const AudioPlayer = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const song = useRef<HTMLAudioElement>(null);
  const {
    currentSong,
    setCurrentSong,
    isPlaying,
    volume,
    mute,
    playback,
    playNextSong,
    duration,
    setDuration,
  } = useCurrentSongContext();
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (!volume) {
      return;
    }
    if (mute === true) {
      ref.current.volume = 0;
    } else {
      ref.current.volume = volume / 10;
    }
  }, [volume, mute]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.playbackRate = playback;
  }, [playback]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.src = currentSong.song;
  }, [currentSong]);

  return (
    <audio ref={ref} onEnded={() => playNextSong()} autoPlay>
      <source type="audio/mpeg"></source>
    </audio>
  );
};
