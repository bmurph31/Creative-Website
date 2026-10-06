import {productUrl, specs, wine} from '../../lib/content';
import {Figure} from '../Figure';
import {Lines, Section} from '../Section';
import {SpecCard} from '../SpecCard';

export function Wine() {
  return (
    <Section id="wine" className="flex min-h-screen items-center">
      <div className="grid w-full grid-cols-1 items-center gap-[clamp(28px,4vw,64px)] lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p data-reveal className="t-eyebrow text-ink/80">
            {wine.eyebrow}
          </p>

          <Lines lines={wine.headline} className="t-display mt-[clamp(10px,1.2vw,18px)] text-ink" />

          <p data-reveal className="t-body mt-[clamp(16px,1.8vw,26px)] max-w-[38ch]">
            {wine.body}
          </p>

          <a
            data-reveal
            href={productUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ink mt-[clamp(20px,2.4vw,34px)]"
          >
            <span className="t-micro">{wine.action}</span>
          </a>
        </div>

        <div className="lg:col-span-4">
          <Figure
            src="/img/google-pen-red.svg"
            alt="Google Pen Red"
            hint="Google Pen Red product"
            fit="contain"
            shadow
            className="mx-auto aspect-[4/5] w-full max-w-[340px]"
          />
        </div>

        <div className="lg:col-span-4">
          <SpecCard specs={specs} />
        </div>
      </div>
    </Section>
  );
}
