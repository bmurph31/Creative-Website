import {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Chrome} from './components/Chrome';
import {Frame} from './components/Frame';
import {Preloader} from './components/Preloader';
import {Allocation} from './components/sections/Allocation';
import {Estate} from './components/sections/Estate';
import {Finish} from './components/sections/Finish';
import {Footer} from './components/sections/Footer';
import {Hero} from './components/sections/Hero';
import {Notes} from './components/sections/Notes';
import {Pairings} from './components/sections/Pairings';
import {Wine} from './components/sections/Wine';
import {useReducedMotion} from './hooks/useReducedMotion';
import {useRevealSystem} from './hooks/useReveal';
import {probeTextures} from './lib/assets';
import {initPointer} from './lib/pointer';
import {ScrollTrigger, initMotion} from './lib/scroll';

export default function App() {
  const reduced = useReducedMotion();
  const [entered, setEntered] = useState(false);

  useLayoutEffect(() => {
    probeTextures();
    return initPointer();
  }, []);

  useLayoutEffect(() => initMotion(reduced), [reduced]);

  useRevealSystem(entered);

  useEffect(() => {
    if (!entered) return;
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh).catch(() => {});
    const t = window.setTimeout(refresh, 600);
    window.addEventListener('load', refresh);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('load', refresh);
    };
  }, [entered]);

  const onDone = useCallback(() => setEntered(true), []);

  return (
    <>
      <Frame />
      <Chrome />

      <main id="top">
        <Hero entered={entered} />
        <Wine />
        <Finish />
        <Notes />
        <Allocation />
        <Pairings />
        <Estate />
      </main>

      <Footer />
      <Preloader onDone={onDone} />
    </>
  );
}
