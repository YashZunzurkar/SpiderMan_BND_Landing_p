import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PageTransition from './components/PageTransition.jsx';
import Home from './pages/Home.jsx';
import Timeline from './pages/Timeline.jsx';
import Characters from './pages/Characters.jsx';
import Trailer from './pages/Trailer.jsx';

function SiteLayout() {
  return <div className="min-h-screen overflow-x-hidden bg-spider-ink text-white"><Navbar />
  <PageTransition />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/trailer" element={<Trailer />} />
      </Routes>
      <Footer />
      </div>;
}

export default function App() { return <SiteLayout />; }
