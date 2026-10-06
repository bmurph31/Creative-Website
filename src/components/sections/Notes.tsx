import {notes} from '../../lib/content';
import {Section} from '../Section';

export function Notes() {
  return (
    <Section id="notes" className="flex min-h-[80vh] flex-col justify-center py-[clamp(56px,9vh,110px)]">
      <p data-reveal className="t-eyebrow text-ink/75">Why it works</p>
      <h2 data-reveal className="t-display mt-[0.12em] text-ink">
        Small Tool. <span className="text-wine">Visible Brand.</span>
      </h2>

      <div className="mt-[clamp(28px,5vw,72px)] grid grid-cols-1 gap-[clamp(16px,2vw,28px)] md:grid-cols-3">
        {notes.map((note) => (
          <article
            key={note.title}
            data-reveal
            className="border border-ink/15 bg-parchment p-[clamp(22px,3vw,40px)]"
          >
            <div className="t-display-sm text-wine">{note.glyph}</div>
            <h3 className="t-display-sm mt-5 text-ink">{note.title}</h3>
            <p className="t-body mt-4">{note.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
