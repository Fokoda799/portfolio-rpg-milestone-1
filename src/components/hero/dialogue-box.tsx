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
    <section aria-label={speaker} className="rpg-dialogue pixel-frame">
      <p className="rpg-dialogue-speaker">{speaker}</p>

      <p aria-live="polite" aria-atomic="true" className="rpg-dialogue-text">
        {message}
      </p>

      <div className="rpg-dialogue-actions">
        {showContinue && (
          <button
            type="button"
            onClick={onContinue}
            className="rpg-dialogue-continue"
          >
            {continueLabel} <span aria-hidden="true">▸</span>
          </button>
        )}

        <button type="button" onClick={onSkip} className="rpg-dialogue-skip">
          {skipLabel}
        </button>
      </div>
    </section>
  );
}
