import { HiPlay } from 'react-icons/hi2';
import CtaButton from './CtaButton.jsx';
export default function Hero({ eyebrow = 'Sony Pictures presents', title, emphasis, copy, image = '/assets/hero-swing.png', compact = false }) 
{ return <section className={`relative isolate flex items-end overflow-hidden ${compact ? 'min-h-[520px] pt-36' : 'min-h-screen pt-32'}`}>
    <img src={image} alt="Cinematic New York cityscape" className="absolute inset-0 -z-20 h-full w-full object-cover object-center animate-slow-zoom" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,10,.96)_0%,rgba(3,5,10,.68)_42%,rgba(3,5,10,.22)_100%),linear-gradient(0deg,rgba(3,5,10,.96)_0%,transparent_58%)]" />
    <div className="web-orbit web-orbit-one" /><div className="web-orbit web-orbit-two" />
    <div className="mx-auto w-full max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="max-w-3xl animate-fade-up">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[.22em] text-spider-red">{eyebrow}</p>
            <h1 className="font-display text-[clamp(3.8rem,10vw,9.5rem)] leading-[.77] tracking-[-.09em] text-white">{title}<span className="block text-spider-red text-stroke-white">{emphasis}</span></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">{copy}</p>{!compact && <>
            <div className="mt-7 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[.13em] text-white/65">
            <span>July 31, 2026</span><span className="text-spider-red">●</span><span>Action / Adventure / Sci-Fi</span>
            <span className="text-spider-red">●</span><span>2h 25m</span></div>
            <div className="mt-9 flex flex-wrap items-center gap-4">
                <CtaButton booking>Book tickets</CtaButton>
                <CtaButton to="/trailer" variant="glass">
                <HiPlay className="text-sm" /> Watch trailer</CtaButton></div></>}
                </div>
                </div>
                </section>; }
