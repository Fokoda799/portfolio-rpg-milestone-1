"use client";

import type { Locale } from "@/lib/i18n/config";
import { copy } from "@/lib/i18n/copy";
import { IdleSprite } from "../hero/idle-sprite";

type StartingAreaProps = Readonly<{
  locale: Locale;
  className?: string;
}>;

export function StartingArea({ locale, className = "" }: StartingAreaProps) {
  const text = copy[locale];
  const sceneClassName =
    `starting-area intro-scene pixel-frame pixel-grid ${className}`.trim();

  return (
    <div
      role="img"
      aria-label={text.sceneDescription}
      className={sceneClassName}
    >
      <div aria-hidden="true" className="scene-stars">
        <i />
        <i />
        <i />
      </div>

      <div aria-hidden="true" className="scene-backdrop scene-backdrop-back" />
      <div aria-hidden="true" className="scene-backdrop scene-backdrop-front" />

      <div aria-hidden="true" className="scene-ground">
        <div className="scene-path" />
        <div className="scene-tile scene-tile-one" />
        <div className="scene-tile scene-tile-two" />
      </div>

      <div aria-hidden="true" className="scene-tree scene-tree-left">
        <span className="scene-tree-crown" />
        <span className="scene-tree-trunk" />
      </div>

      <div aria-hidden="true" className="scene-tree scene-tree-right">
        <span className="scene-tree-crown" />
        <span className="scene-tree-trunk" />
      </div>

      <div aria-hidden="true" className="scene-character">
        <IdleSprite size={320} frameRate={6} />
      </div>
    </div>
  );
}
