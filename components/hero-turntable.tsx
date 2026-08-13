"use client";

import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/audio/leberch-jazz-piano-578722.mp3";

export function HeroTurntable() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;
    audio.loop = true;
    audio.preload = "auto";

    // Start loading the audio immediately when the page mounts.
    audio.load();

    // Warm the browser cache as early as possible.
    fetch(AUDIO_SRC, {
      method: "GET",
      cache: "force-cache",
    }).catch(() => {
      // The audio element can still load normally if prefetch fails.
    });
  }, []);

  const handleMouseEnter = async () => {
    const audio = audioRef.current;

    setIsActive(true);

    if (!audio) return;

    try {
      if (audio.readyState < 2) {
        audio.load();
      }

      if (audio.currentTime > 0.05) {
        audio.currentTime = 0;
      }

      await audio.play();
    } catch {
      /*
       * Some browsers can still restrict unmuted audio
       * until the visitor has interacted with the page.
       */
    }
  };

  const handleMouseLeave = () => {
    const audio = audioRef.current;

    setIsActive(false);

    if (!audio) return;

    audio.pause();

    try {
      audio.currentTime = 0;
    } catch {
      // Ignore if metadata has not finished loading yet.
    }
  };

  return (
    <div
      className={`hero-turntable ${isActive ? "is-active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive record player"
    >
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
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