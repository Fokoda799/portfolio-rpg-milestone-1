import type { Locale } from "@/lib/i18n/config";
import { copy } from "@/lib/i18n/copy";
import Image from "next/image";
import { IdleSprite } from "./idle-sprite";

type IntroSceneProps = Readonly<{
  locale: Locale;
}>;

export function IntroScene({ locale }: IntroSceneProps) {
  const text = copy[locale];

  return (
    <div
      role="img"
      aria-label={text.sceneDescription}
      className="intro-scene pixel-frame pixel-grid"
    >
      <div aria-hidden="true" className="scene-stars">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div aria-hidden="true" className="scene-moon" />
      <div aria-hidden="true" className="scene-hill scene-hill-back" />
      <div aria-hidden="true" className="scene-hill scene-hill-front" />

      <div aria-hidden="true" className="scene-ground">
        <div className="scene-path" />
        <div className="scene-tile scene-tile-one" />
        <div className="scene-tile scene-tile-two" />
        <div className="scene-tile scene-tile-three" />
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
