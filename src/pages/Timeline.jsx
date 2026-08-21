import Hero from '../components/Hero.jsx';
import TimelineCard from '../components/TimelineCard.jsx';
import CtaButton from '../components/CtaButton.jsx';
import { timelineData } from '../data/timelineData.js';
export default function Timeline() {
  return (
    <main className="page-enter">
      <Hero
        compact
        eyebrow="The complete story"
        title="SPIDER-MAN"
        emphasis="TIMELINE"
        copy="Every leap, loss, and impossible choice has led to this. Follow Peter Parker’s story from his first suit to a Brand New Day."
        image="/assets/city-hero.png"
      />

      
      <section className="section-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The chronological order</p>

          <h2 className="section-title mt-3">
            ONE HERO. <span>SEVEN CHAPTERS.</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/60">
            Start at the beginning to feel every echo in the latest chapter.
            This is the complete cinematic path to Brand New Day.
          </p>
        </div>

        <div className="timeline-line mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {timelineData.map((movie, index) => (
            <TimelineCard
              key={movie.id}
              movie={movie}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-5 mb-24 overflow-hidden rounded-3xl border border-spider-red/30 bg-spider-red/10 px-6 py-14 text-center sm:mx-8 sm:px-10">
        <p className="eyebrow text-spider-red">
          The story continues
        </p>

        <h2 className="section-title mt-3">
          THE NEXT THREAD <span>STARTS NOW.</span>
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton to="/trailer" variant="glass">
            Watch trailer
          </CtaButton>

          <CtaButton booking>
            Book tickets
          </CtaButton>
        </div>
      </section>
    </main>
  );
}
