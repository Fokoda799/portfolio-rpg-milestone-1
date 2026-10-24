
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type IdleSpriteProps = {
  frameCount?: number;
  frameRate?: number;
  size?: number;
};

export function IdleSprite({
  frameCount = 25,
  frameRate = 6,
  size = 320,
}: IdleSpriteProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (media.matches || frameRate <= 0) return;

    const interval = window.setInterval(() => {
      setFrame((current) => (current + 1) % frameCount);
    }, 1000 / frameRate);

    return () => window.clearInterval(interval);
  }, [frameCount, frameRate]);

  return (
    <Image
      src={`/images/character/idle/idle_${String(frame + 1).padStart(2, "0")}.png`}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        imageRendering: "pixelated",
        transformOrigin: "center",
      }}
    />
  );
}
