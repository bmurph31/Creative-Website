import {useRef} from 'react';
import {finish} from '../../lib/content';
import {useParallax} from '../../hooks/useReveal';
import {Figure} from '../Figure';
import {GiantType} from '../GiantType';
import {Section} from '../Section';

export function Finish() {
  const product = useRef<HTMLDivElement>(null);
  useParallax(product, {from: 0.12, to: -0.14});

  return (
    <Section id="finish" className="flex min-h-[120vh] flex-col justify-center">
      <GiantType lines={[finish.giant]} decorative align="center" from={0.28} to={-0.36} />

      <div className="mt-[clamp(26px,5vh,72px)] grid w-full grid-cols-1 items-center gap-[clamp(28px,4vw,64px)] lg:grid-cols-12">
        <div ref={product} className="lg:col-span-4">
          <Figure
            src="/img/google-pen-red.svg"
            alt="Google Pen Red shown as a professional workplace accessory"
            hint="Google Pen Red"
            fit="contain"
            shadow
            className="mx-auto aspect-[4/5] w-full max-w-[320px]"
          />
          <p className="t-eyebrow mt-[clamp(10px,1.1vw,16px)] text-center text-ink/80">
            {finish.videoCaption.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="hidden lg:col-span-3 lg:block" aria-hidden="true" />

        <div className="lg:col-span-5">
          <p data-reveal className="t-body max-w-[46ch]">
            {finish.lead}
          </p>

          <h3 data-reveal className="t-display-sm mt-[clamp(20px,2.4vw,34px)] text-ink">
            {finish.styleHeading}
          </h3>

          {finish.styleBody.map((para) => (
            <p
              key={para}
              data-reveal
              className="t-body-xs mt-[clamp(10px,1.1vw,16px)] max-w-[48ch]"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
