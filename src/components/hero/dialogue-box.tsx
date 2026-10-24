"use client";

type DialogueBoxProps = Readonly<{
  speaker: string;
  message: string;
  continueLabel: string;
  skipLabel: string;
  onContinue: () => void;
  onSkip: () => void;
  showContinue: boolean;
}>;

export function DialogueBox({
  speaker,
  message,
  continueLabel,
  skipLabel,
  onContinue,
  onSkip,
  showContinue,
}: DialogueBoxProps) {
  return (
    <section aria-label={speaker} className="rpg-dialogue">
      <header className="rpg-dialogue-header">
        <span className="rpg-dialogue-speaker-mark" aria-hidden="true">
          ◆
        </span>
        <p className="rpg-dialogue-speaker">{speaker}</p>
      </header>

      <div className="rpg-dialogue-viewport">
        <p aria-live="polite" aria-atomic="true" className="rpg-dialogue-text">
          {message}
        </p>
        <span className="rpg-dialogue-caret" aria-hidden="true">
          ▼
        </span>
      </div>

      <div className="rpg-dialogue-actions">
        {showContinue && (
          <button
            type="button"
            onClick={onContinue}
            className="pixel-button pixel-button--primary"
          >
            {continueLabel}
            <span aria-hidden="true">▸</span>
          </button>
        )}

        <button type="button" onClick={onSkip} className="pixel-button">
          {skipLabel}
        </button>
      </div>
    </section>
  );
}
