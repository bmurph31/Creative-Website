import type {CSSProperties} from 'react';
import {allocation} from '../../lib/content';
import {Figure} from '../Figure';
import {Section} from '../Section';

export function Allocation() {
  return (
    <Section id="alloc" className="relative flex min-h-screen flex-col justify-center">
      <div className="relative text-center">
        <p data-reveal className="t-eyebrow text-ink/80">
          {allocation.eyebrow}
        </p>
        <h2 data-reveal className="t-display mt-[0.1em] text-ink">
          {allocation.giant} <span className="text-wine">{allocation.giantSub}</span>
        </h2>
      </div>

      <ul
        className="mt-[clamp(26px,5vh,64px)] flex w-full items-end justify-center gap-[clamp(6px,2.4vw,44px)]"
        style={{'--row': 'clamp(104px, 24vh, 292px)'} as CSSProperties}
      >
        {allocation.formats.map((format) => {
          const height = `calc(var(--row) * ${format.h})`;
          return (
            <li key={format.id} className="flex min-w-0 flex-1 flex-col items-center">
              <Figure
                src={format.src!}
                alt={`${format.caption} — ${format.detail}`}
                hint={format.caption}
                fit="contain"
                shadow
                className="w-full"
                imgClassName="object-bottom"
                style={{height}}
              />
              <p data-reveal className="t-micro mt-[clamp(10px,1.4vw,20px)] text-center text-ink">
                {format.caption}
              </p>
              <p data-reveal className="t-body-xs mt-[3px] text-center">
                {format.detail}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
