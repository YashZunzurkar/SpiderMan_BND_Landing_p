import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';

const bookingUrl = 'https://in.bookmyshow.com/movies/delhi/spider-man-brand-new-day/ET00447840';

export default function CtaButton({ children, to, booking = false, variant = 'red', className = '' }) {
  const styles = variant === 'blue' ? 'bg-spider-blue hover:shadow-blue' : variant === 'glass' ? 'border border-white/30 bg-white/10 hover:bg-white hover:text-black' : 'bg-spider-red hover:shadow-red';
  const shared = `group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 font-mono text-[10px] font-medium uppercase tracking-[.16em] text-white transition duration-300 hover:-translate-y-1 ${styles} ${className}`;
  const content = <>{children}<HiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>;
  if (booking) return <a className={shared} href={bookingUrl} target="_blank" rel="noreferrer">{content}</a>;
  return <Link className={shared} to={to}>{content}</Link>;
}
