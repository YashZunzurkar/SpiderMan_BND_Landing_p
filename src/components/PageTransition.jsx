import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader.jsx';
export default function PageTransition() 

{ const location = useLocation();
     const [loading, setLoading] = useState(false);
      useEffect(() => { setLoading(true); 
        const timer = window.setTimeout(() => setLoading(false), 750); 
        return () => window.clearTimeout(timer); }, 
        [location.pathname]); return loading ? <Loader /> : null; }
