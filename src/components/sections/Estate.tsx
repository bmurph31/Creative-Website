import {estate, productUrl} from '../../lib/content';
import {Figure} from '../Figure';
import {Lines, Section} from '../Section';

export function Estate() {
  return (
    <Section
      id="estate"
      className="pt-[clamp(40px,9vh,120px)]"
      style={{paddingLeft: 'var(--frame)', paddingRight: 'var(--frame)'}}
    >
      <div className="relative overflow-hidden bg-oxblood px-[clamp(24px,5vw,80px)] py-[clamp(50px,10vh,120px)]">
        <div className="grid grid-cols-1 items-center gap-[clamp(30px,5vw,80px)] lg:grid-cols-2">
          <div>
            <p data-reveal className="t-eyebrow text-parchment/85">
              {estate.eyebrow}
            </p>
            <Lines
              lines={estate.headline}
              className="t-display mt-[0.12em] text-parchment"
            />
            <p data-reveal className="t-body mt-[clamp(12px,1.4vw,20px)] max-w-[46ch] text-parchment/80">
              {estate.body}
            </p>
            <a
              data-reveal
              href={productUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex border border-parchment/35 px-5 py-3 text-parchment transition-colors hover:bg-parchment hover:text-ink"
            >
              <span className="t-micro">Shop the Google Pen Red</span>
            </a>
          </div>

          <Figure
            src="/img/google-pen-red.svg"
            alt="Google Pen Red"
            hint="Google Pen Red"
            fit="contain"
            className="mx-auto aspect-[4/5] w-full max-w-[420px]"
          />
        </div>
      </div>
    </Section>
  );
}
