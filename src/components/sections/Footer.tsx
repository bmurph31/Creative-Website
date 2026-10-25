import {useState} from 'react';
import {Section} from '../Section';
export function Footer() {
  const [question, setQuestion] = useState<number | null>(null);
  const faqs = [
    ['Does this website analyze my photo?', 'No. This is a venture concept and interactive preview. The demo uses the lie and distance you select to show illustrative advice; it does not run AI image analysis.'],
    ['Can I subscribe or download the app?', 'Not yet. The proposed subscription, pricing, and launch date are still being developed. You can email Brendan to share feedback or express interest.'],
    ['What happens to a photo I select?', 'The demo displays it locally in your browser. It is not uploaded or stored by this site. Refreshing the page clears the preview.'],
    ['Who is Golf AI for?', 'Recreational golfers of all genders, initially focused on active adults ages 18–80 in North America and Europe who value convenient, affordable guidance.'],
  ];
  return <>
    <Section id="faq" className="faq-section"><p className="t-eyebrow">Before you tee off</p><h2 className="t-display mt-4">GOOD QUESTIONS.</h2>
      <div className="faq-list">{faqs.map(([q, a], i) => <div key={q}><h3><button aria-expanded={question === i} aria-controls={'answer-' + i} onClick={() => setQuestion(question === i ? null : i)}>{q}<span aria-hidden="true">{question === i ? '−' : '+'}</span></button></h3><p id={'answer-' + i} hidden={question !== i}>{a}</p></div>)}</div>
    </Section>
    <footer id="footer" className="golf-footer">
      <div><p className="t-micro">HELP SHAPE THE NEXT SHOT</p><h2>LET’S TALK GOLF.</h2><p>Have a question or an idea for Golf AI? Share what you would want from a caddy in your pocket.</p><a className="footer-contact" href="mailto:brendan.murphy3@student.fairfield.edu?subject=Golf%20AI%20feedback">Email Brendan ↗</a><p className="contact-address">brendan.murphy3@student.fairfield.edu</p></div>
      <nav aria-label="Footer navigation"><a href="#wine">The idea</a><a href="#demo">Interactive demo</a><a href="#pairings">Membership concept</a><a href="#faq">Questions</a><a href="#top">Back to top ↑</a></nav>
      <div className="footer-legal"><span>© {new Date().getFullYear()} Golf AI · A marketing venture concept by Brendan Murphy.</span><span>Prototype only. No live AI analysis or subscription sales.</span></div>
    </footer>
  </>;
}
