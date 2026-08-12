"use client";

import { useEffect, useRef, useState } from "react";

export function HeroTurntable() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.45;
    audioRef.current.loop = true;
  }, []);

  const handleStart = async () => {
    setIsActive(true);

    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
    } catch (error) {
      console.warn("Audio playback may need a first user interaction.", error);
    }
  };

  const handleStop = () => {
    setIsActive(false);

    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div
      className={`hero-turntable ${isActive ? "is-active" : ""}`}
      onMouseEnter={handleStart}
      onMouseLeave={handleStop}
      onFocus={handleStart}
      onBlur={handleStop}
      tabIndex={0}
      aria-label="Interactive record player"
    >
      <audio
        ref={audioRef}
        src="/audio/leberch-jazz-piano-578722.mp3"
        preload="auto"
      />

      <div className="hero-turntable__scene">
        <div className="hero-turntable__shadow" />

        <div className="hero-turntable__record">
          <div className="hero-turntable__grooves" />
          <div className="hero-turntable__label" />
          <div className="hero-turntable__spindle" />
        </div>

        <div className="hero-turntable__arm">
          <div className="hero-turntable__arm-bar" />
          <div className="hero-turntable__arm-head" />
        </div>
      </div>
    </div>
  );
}