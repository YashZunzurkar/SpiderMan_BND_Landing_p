import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';
import CtaButton from './CtaButton.jsx';

const navItems = [{ label: 'Home', to: '/' }, { label: 'Timeline', to: '/timeline' }, { label: 'Characters', to: '/characters' }, { label: 'Trailer', to: '/trailer' }];

export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 24); update(); window.addEventListener('scroll', update); return () => window.removeEventListener('scroll', update); }, []);
  const linkClass = ({ isActive }) => `transition hover:text-white ${isActive ? 'text-white' : 'text-white/60'}`;
  return <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${scrolled || open ? 'border-white/10 bg-[#05070b]/85 backdrop-blur-xl' : 'border-transparent bg-gradient-to-b from-black/60 to-transparent'}`}>
    <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
      <NavLink to="/" className="font-display text-xl tracking-[-.08em] text-white">SPIDER<span className="text-spider-red">•</span>MAN <i className="font-mono text-[8px] not-italic tracking-normal text-white/50">BND/26</i></NavLink>
      <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[.14em] md:flex">{navItems.map((item) => <NavLink key={item.to} className={linkClass} to={item.to}>{item.label}</NavLink>)}
      </nav>
      <div className="hidden md:block"><CtaButton booking className="px-4 py-2.5">Book tickets</CtaButton>
      </div>
      <button className="grid h-10 w-10 place-items-center text-2xl md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <HiXMark /> : <HiBars3BottomRight />}</button>
      </div>
    {open && <nav className="space-y-5 border-t border-white/10 px-6 py-7 font-mono text-xs uppercase tracking-[.15em] md:hidden">{navItems.map((item) => <NavLink key={item.to} className={linkClass} onClick={() => setOpen(false)} to={item.to}>{item.label}</NavLink>)}<CtaButton booking className="mt-2">Book tickets</CtaButton></nav>}
  </header>;
}
