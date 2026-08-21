import {
  HiArrowLeft,
  HiArrowRight,
  HiQuestionMarkCircle,
} from "react-icons/hi2";

import CtaButton from "./CtaButton.jsx";

export default function CharacterCard({
  character,
  position,
  total,
  onPrevious,
  onNext,
}) {
  return (
    <div
      className={`character-stage ${character.themeClass} overflow-hidden rounded-[2rem] border border-white/15 shadow-cinema transition duration-700`}
    >
      <div className="grid min-h-[580px] lg:grid-cols-[1.05fr_.95fr]">
        {/* Left Image Section */}
        <div className="relative min-h-[330px] overflow-hidden">
          <img
            src={character.image}
            alt="Abstract character visual"
            className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-screen"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <span className="absolute left-7 top-7 font-mono text-[10px] tracking-[.18em] text-white/70">
            SUBJECT {character.id}
          </span>

          <span className="absolute bottom-1 left-6 font-display text-[clamp(9rem,18vw,16rem)] leading-none tracking-[-.15em] text-white/15">
            {character.isSecretCharacter ? "?" : character.name.slice(0, 1)}
          </span>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col p-7 sm:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/60">
            {character.isSecretCharacter
              ? "CLASSIFIED FILE"
              : "MEET THE CHARACTER"}
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[.82] tracking-[-.09em] sm:text-6xl">
            {character.name}
          </h2>

          <p className="mt-3 font-mono text-[10px] uppercase tracking-[.18em] text-spider-mist">
            Played by {character.actor}
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
            <HiQuestionMarkCircle className="text-xl" />
            {character.tagline}
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            {character.description}
          </p>

          <p className="mt-5 border-l-2 border-white/40 pl-4 text-sm leading-6 text-white/60">
            <span className="font-mono text-[9px] uppercase tracking-[.14em] text-white">
              Importance /
            </span>
            {character.importance}
          </p>

          {/* Navigation & CTA */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
            <div className="flex gap-2">
              <button
                className="control-button"
                onClick={onPrevious}
                aria-label="Previous character"
              >
                <HiArrowLeft />
              </button>

              <button
                className="control-button"
                onClick={onNext}
                aria-label="Next character"
              >
                <HiArrowRight />
              </button>
            </div>

            <CtaButton
              booking
              variant={character.isSecretCharacter ? "blue" : "red"}
            >
              Book tickets
            </CtaButton>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 border-t border-white/10 py-4 lg:border-l lg:border-t-0">
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === position
                ? "w-8 bg-white"
                : "w-1.5 bg-white/30"
            }`}
          />
        ))}

        <span className="ml-3 font-mono text-[10px] tracking-[.16em] text-white/55">
          {String(position + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}