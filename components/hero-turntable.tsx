"use client";

import { useEffect, useRef, useState } from "react";

export function HeroTurntable() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;
    audio.loop = true;
    audio.preload = "auto";

    /*
     * Browsers may block audio before the visitor has interacted
     * with the page. A first interaction anywhere on the page
     * prepares the audio so later mouse hover can play it.
     */
    const unlockAudio = async () => {
      try {
        const oldVolume = audio.volume;

        audio.volume = 0;
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
        audio.volume = oldVolume;
      } catch {
        // Browser may still enforce its own autoplay policy.
      }
    };

    window.addEventListener("pointerdown", unlockAudio, {
      once: true,
    });

    window.addEventListener("keydown", unlockAudio, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  const handleMouseEnter = async () => {
    setIsActive(true);

    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.currentTime = 0;
      await audio.play();
    } catch {
      /*
       * The record animation still starts on hover even if
       * the browser blocks first-hover audio.
       */
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);

    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
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