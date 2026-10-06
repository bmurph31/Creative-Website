import {useLayoutEffect, useRef} from 'react';
import {hero} from '../../lib/content';
import {gsap, scrollTo} from '../../lib/scroll';
import {GiantType} from '../GiantType';
import {Section} from '../Section';

export function Hero({entered}: {entered: boolean}) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!entered) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({defaults: {ease: 'expo.out'}})
        .fromTo(
          '[data-intro-line]',
          {yPercent: 135, y: 0},
          {yPercent: 0, y: 0, duration: 1.35, stagger: 0.095},
        )
        .fromTo(
          '[data-intro-fade]',
          {opacity: 0, y: 18},
          {opacity: 1, y: 0, duration: 1.05, stagger: 0.09},
          '-=1.05',
        );
    }, root);

    return () => ctx.revert();
  }, [entered]);

  return (
    <Section
      id="hero"
      z={10}
      className="flex min-h-[98vh] flex-col justify-center"
      style={{
        paddingTop: 'clamp(225px, 38vh, 480px)',
        paddingBottom: 'clamp(28px, 6vh, 80px)',
        paddingRight: 'calc(var(--frame) + clamp(16px, 2.4vw, 46px))',
      }}
    >
      <div ref={root} className="relative">
        <GiantType
          as="h1"
          lines={hero.giant}
          masked
          align="center"
          from={0}
          to={-0.34}
          fill={0.995}
        />

        <button
          type="button"
          data-intro-fade
          onClick={() => scrollTo('#wine')}
          className="group absolute -bottom-[clamp(20px,3.2vh,42px)] left-0 flex cursor-pointer items-center gap-3 text-ink"
        >
          <span className="relative block h-[26px] w-px overflow-hidden bg-ink/25">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[cue_2.4s_ease-in-out_infinite] bg-ink" />
          </span>
          <span className="t-micro">{hero.cue}</span>
        </button>
      </div>
    </Section>
  );
}
