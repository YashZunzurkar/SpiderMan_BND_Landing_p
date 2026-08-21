import { useEffect, useState } from 'react';
import Hero from '../components/Hero.jsx';
import CharacterCard from '../components/CharacterCard.jsx';
import { charactersData } from '../data/charactersData.js';
export default function Characters() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const change = (direction) => {
    setPaused(true);

    setCurrent(
      (value) =>
        (value + direction + charactersData.length) %
        charactersData.length
    );

    window.setTimeout(() => {
      setPaused(false);
    }, 6000);
  };

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      setCurrent(
        (value) => (value + 1) % charactersData.length
      );
    }, 10000);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <main className="page-enter">
      <Hero
        compact
        eyebrow="The people behind the masks"
        title="MEET THE"
        emphasis="CHARACTERS"
        copy="The friends, secrets, and shadows that make a new beginning so difficult to hold onto."
        image="/assets/web-vortex.png"
      />

      {/* Characters Section */}
      <section className="section-wrap">
        <div className="mb-9 flex flex-wrap justify-between gap-4">
          <div>
            <p className="eyebrow">
              Character profiles / auto-rotates every 10 seconds
            </p>

            <h2 className="section-title mt-3">
              WHO IS IN <span>THE WEB?</span>
            </h2>
          </div>

          <p className="max-w-xs self-end text-sm leading-6 text-white/50">
            .
          </p>
        </div>

        <CharacterCard
          character={charactersData[current]}
          position={current}
          total={charactersData.length}
          onPrevious={() => change(-1)}
          onNext={() => change(1)}
        />
      </section>
    </main>
  );
}
