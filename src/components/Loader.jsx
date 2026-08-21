import { GiSpiderMask } from 'react-icons/gi';

export default function Loader() { 
    return <div className="route-loader fixed inset-0 z-[100] grid place-items-center bg-[#030407]">
        <div className="relative h-48 w-80 overflow-hidden">
            <div className="loader-web" />
            <div className="loader-skyline">
                <i /><i /><i /><i /><i />
            </div>
            <GiSpiderMask className="loader-spider absolute bottom-8 left-9 text-4xl text-spider-red" />
            <p className="absolute bottom-0 left-0 right-0 text-center font-mono text-[9px] uppercase tracking-[.25em] text-white/70">Threading the next chapter</p></div>
    </div>; 
}
