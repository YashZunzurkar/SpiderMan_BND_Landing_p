import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';
import Hero from '../components/Hero.jsx';
import TimelineCard from '../components/TimelineCard.jsx';
import CtaButton from '../components/CtaButton.jsx';
import { timelineData } from '../data/timelineData.js';
import { charactersData } from '../data/charactersData.js';


export default function Home() {
  return (
    <main className="page-enter">
      <Hero
        title="SPIDER-"
        emphasis="MAN"
        copy="Fighting crime full-time in a world that no longer remembers him, Peter Parker faces the hardest test of all: learning to move forward."
      />

      
      <section className="section-wrap web-section">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <p className="eyebrow">01 / The new chapter</p>

          <div>
            <h2 className="section-title">
              WHAT IS <span>BRAND NEW DAY?</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">
              The next Spider-Man story follows Peter in a city that has
              forgotten him, where every fresh start comes with a new kind of
              responsibility. A spoiler-free invitation to return to the
              street-level stakes that made the hero timeless.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton booking>Book tickets</CtaButton>

              <CtaButton to="/trailer" variant="glass">
                Watch trailer
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

    
      <section className="section-wrap border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">02 / The journey so far</p>

            <h2 className="section-title mt-3">
              THE WEB <span>RUNS DEEP.</span>
            </h2>
          </div>

          <Link className="link-arrow" to="/timeline">
            Explore timeline
            <HiArrowUpRight />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {timelineData.slice(0, 3).map((movie, index) => (
            <TimelineCard
              key={movie.id}
              movie={movie}
              index={index}
            />
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-white/55">
          Watching Peter’s journey in order turns every victory and sacrifice
          into a larger story. Follow the full timeline before your next trip
          to the cinema.
        </p>
      </section>

      
      <section className="section-wrap relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(27,113,209,.24),transparent_30%)]" />

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">03 / The people in the web</p>

            <h2 className="section-title mt-3">
              MEET THE <span>PLAYERS.</span>
            </h2>
          </div>

          <Link className="link-arrow" to="/characters">
            Explore characters
            <HiArrowUpRight />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {charactersData.slice(0, 4).map((character) => (
            <article
              key={character.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] transition duration-500 hover:-translate-y-2 hover:border-spider-red/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={character.image}
                  alt=""
                  className="h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

                <span className="absolute bottom-4 left-4 font-display text-5xl tracking-[-.1em] text-white/20">
                  {character.name.charAt(0)}
                </span>
              </div>

              <div className="p-5">
                <p className="font-mono text-[9px] tracking-[.16em] text-spider-red">
                  {character.tagline}
                </p>

                <h3 className="mt-2 font-display text-2xl tracking-[-.06em]">
                  {character.name}
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  {character.actor}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">
          Meet the people who shape Peter’s new reality before the next chapter
          begins.
        </p>
      </section>
    </main>
  );
}
