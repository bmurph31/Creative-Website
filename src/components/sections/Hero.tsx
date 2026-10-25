import {Section} from '../Section';
export function Hero({entered}: {entered: boolean}) {
  return <Section id="hero" className="golf-hero" z={10}>
    <div className="hero-copy" data-entered={entered}>
      <p className="t-micro hero-kicker">THE NEXT SHOT STARTS HERE · VENTURE CONCEPT</p>
      <h1>LESS GUESS.<br/><span>MORE GOLF.</span></h1>
      <p className="hero-intro">A quick photo. A clearer decision.<br/>Meet <strong>Golf AI</strong> — your caddy in your pocket.</p>
      <div className="hero-buttons"><a href="#demo" className="btn-ink">Try a sample shot <span aria-hidden="true">↗</span></a><a href="#wine" className="link-rule">Discover Golf AI ↓</a></div>
      <p className="hero-note">An app idea for everyday golfers. Explore the interactive concept below.</p>
    </div>
    <div className="hero-art"><img src={import.meta.env.BASE_URL + 'img/golf-course.svg'} alt="Illustrated golf course with a ball, a curved shot path, and a flag on the green"/><div className="hero-caption"><span>READ THE LIE.</span><span>OWN THE NEXT SHOT.</span></div></div>
    <div className="hero-bottom"><span>01 / A LITTLE GUIDANCE GOES A LONG WAY</span><a href="#wine">SCROLL TO EXPLORE ↓</a></div>
  </Section>;
}
