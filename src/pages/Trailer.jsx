import { HiPlay } from 'react-icons/hi2';
import Hero from '../components/Hero.jsx';
import VideoCard from '../components/VideoCard.jsx';
import CtaButton from '../components/CtaButton.jsx';
import { videosData } from '../data/videosData.js';

export default function Trailer() {
  const featured = videosData[0];

  return (
    <main className="page-enter">
      <Hero
        compact
        eyebrow="Sony Pictures / Marvel"
        title="OFFICIAL"
        emphasis="VIDEOS"
        copy="Step into the signal. Catch every look at the next Spider-Man story, from first frame to final swing."
        image="/assets/hero-swing.png"
      />

      {/* Featured Trailer */}
      <section className="section-wrap">
        <div className="grid gap-9 lg:grid-cols-[1.45fr_.55fr]">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-black shadow-cinema">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/62bIsvRcPv0?si=ok889I2bjdhGUnke"
                title="Spider-Man: Brand New Day official trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[.035] p-7">
            <p className="eyebrow">Featured trailer</p>

            <h2 className="mt-4 font-display text-4xl leading-[.85] tracking-[-.08em]">
              BRAND NEW
              <br />
              <span className="text-spider-red">DAY.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              A new chapter begins with New York still calling, old bonds still
              pulling, and a threat that refuses to stay in the dark.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] transition hover:border-spider-red hover:bg-spider-red"
                href={featured.url}
                target="_blank"
                rel="noreferrer"
              >
                <HiPlay />
                Watch on YouTube
              </a>

              <CtaButton booking variant="blue">
                Book tickets
              </CtaButton>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Videos */}
      <section className="section-wrap border-t border-white/10">
        <p className="eyebrow">More from the web</p>

        <h2 className="section-title mt-3">
          RELATED <span>VIDEOS.</span>
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {videosData.slice(1).map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </div>
      </section>
    </main>
  );
}