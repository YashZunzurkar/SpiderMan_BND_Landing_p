

import { HiPlay } from "react-icons/hi2";

export default function VideoCard({ video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] transition duration-500 hover:-translate-y-1 hover:border-spider-blue/70 hover:shadow-blue"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.image}
          alt=""
          className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent" />

        {/* Label */}
        <span className="absolute left-4 top-4 rounded bg-black/50 px-2 py-1 font-mono text-[9px] tracking-[.14em] backdrop-blur">
          {video.label}
        </span>

        {/* Duration */}
        <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 font-mono text-[9px]">
          {video.duration}
        </span>

        {/* Play Button */}
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-spider-red text-xl shadow-red transition duration-300 group-hover:scale-110">
            <HiPlay />
          </span>
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-xl tracking-[-.05em]">
          {video.title}
        </h3>

        <p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/45">
          Watch on YouTube ↗
        </p>
      </div>
    </a>
  );
}
