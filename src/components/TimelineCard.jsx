import { HiArrowUpRight, HiPlay } from 'react-icons/hi2';
import CtaButton from './CtaButton.jsx';
export default function TimelineCard({ movie, index }) 
{ return <article className={`group relative rounded-3xl border border-white/10 bg-white/[.035] p-3 shadow-cinema transition duration-500 hover:-translate-y-2 hover:border-spider-red/60 ${movie.isLatest ? 'lg:col-span-2 lg:grid lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-7 lg:p-5' : ''}`}>
    <div className={`poster-shell ${movie.posterClass} relative overflow-hidden rounded-2xl ${movie.isLatest ? 'lg:h-[350px]' : 'h-72'}`}>
        <img src={movie.poster} alt="" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[9px] tracking-[.14em] backdrop-blur">{movie.id}</span>{movie.isLatest && <span className="absolute right-4 top-4 rounded-full bg-spider-red px-3 py-1 font-mono text-[9px] tracking-[.14em]">LATEST</span>}
        
        <span className="absolute bottom-4 left-4 font-mono text-xs font-medium text-white/80">{movie.releaseYear}</span>
        </div>
        
        <div className="p-3 pt-5">
            <p className="font-mono text-[9px] uppercase tracking-[.16em] text-spider-red">{movie.badge}</p>
            <h3 className="mt-2 font-display text-2xl leading-none tracking-[-.065em]">{movie.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">{movie.description}</p>
            
            {movie.isLatest ? <div className="mt-5 flex flex-wrap gap-3">
                <CtaButton booking className="py-2.5">Book tickets</CtaButton>
                <CtaButton to="/trailer" variant="glass" className="py-2.5">
                <HiPlay /> Watch trailer</CtaButton></div> : <span className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em] text-white/50">Movie {index + 1}
                <HiArrowUpRight />
                </span>}</div>
                </article>; }
