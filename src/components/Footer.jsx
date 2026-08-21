import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

import CtaButton from "./CtaButton.jsx";

const links = [
  { label: "Timeline", to: "/timeline" },
  { label: "Characters", to: "/characters" },
  { label: "Trailer", to: "/trailer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030407] px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <p className="font-display text-4xl tracking-[-.1em]">
            SPIDER
            <span className="text-spider-red">•</span>
            MAN
          </p>

          <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
            A fan-built promotional experience celebrating the next chapter in
            Peter Parker’s journey.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">
            Navigate
          </p>

          <div className="mt-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-white/70 transition hover:text-spider-red"
              >
                {link.label}
              </Link>
            ))}

            <CtaButton booking className="mt-2 w-fit">
              Book tickets
            </CtaButton>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">
            Follow the signal
          </p>

          <div className="mt-4 flex gap-3">
            {[FaInstagram, FaYoutube, FaXTwitter].map((Icon, index) => (
              <a
                key={index}
                href="https://www.sonypictures.com/movies/spidermanbrandnewday"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-spider-red hover:bg-spider-red hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[.13em] text-white/35">
        <span>© 2026 Sony Pictures / Marvel-inspired fan concept.</span>

        <span>Made for the big screen.</span>
      </div>
    </footer>
  );
}
