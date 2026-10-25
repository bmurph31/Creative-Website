import {useEffect, useRef, useState} from 'react';
import {Section} from '../Section';
import {scrollTo} from '../../lib/scroll';
type Lie = 'Fairway' | 'Rough' | 'Bunker';
const lies: Lie[] = ['Fairway', 'Rough', 'Bunker'];
export function Demo() {
  const [lie, setLie] = useState<Lie>('Fairway');
  const [distance, setDistance] = useState(120);
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(false);
  const file = useRef<HTMLInputElement>(null);
  const output = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (result) {
      output.current?.focus({preventScroll: true});
      scrollTo('#shot-result', -115);
    }
  }, [result]);
  useEffect(() => () => {if (photo) URL.revokeObjectURL(photo);}, [photo]);
  const short = distance <= 60;
  const title = lie === 'Bunker' ? (short ? 'Think escape first.' : 'Find a safe way out.') : lie === 'Rough' ? 'Put position before distance.' : short ? 'Keep the landing spot simple.' : distance > 170 ? 'Choose the generous target.' : 'Play to the middle.';
  const advice = lie === 'Bunker'
    ? (short ? 'For this sample greenside bunker situation, consider a lofted wedge and a clear landing area. The lip height and sand condition determine whether that shot is realistic.' : 'For this sample fairway bunker, prioritize clearing the lip. Consider a shorter club and a conservative target rather than forcing the full distance.')
    : lie === 'Rough'
    ? 'For this sample lie, consider a more lofted club and a controlled recovery toward open fairway. Thick grass can change contact and carry, so a shorter recovery may be the better choice.'
    : short
    ? 'For this sample short approach, consider a controlled wedge shot to a generous landing spot. If the path is clear and the ground suits it, a lower-running option may also work.'
    : distance > 170
    ? 'For this sample longer approach, consider a hybrid or longer club only if your usual carry fits. Otherwise, lay up to a comfortable distance and keep trouble out of play.'
    : 'For this sample approach, choose an iron or wedge based on your own usual carry distance. Aim for the center of the green rather than a tucked flag.';
  const reset = () => {setLie('Fairway'); setDistance(120); setPhoto(''); setError(''); setResult(false); if(file.current) file.current.value = '';};
  return <Section id="demo" className="demo-section">
    <div className="demo-heading"><div><p className="t-eyebrow">Take the idea for a test drive.</p><h2 className="t-display mt-4">YOUR LIE.<br/><span className="text-wine">YOUR NEXT MOVE.</span></h2></div><p className="demo-disclosure"><strong>INTERACTIVE CONCEPT DEMO</strong>Example guidance based on your selections, not AI photo analysis. No account needed.</p></div>
    <div className="demo-layout">
      <div className="demo-inputs">
        <div className="demo-picture"><img src={photo || import.meta.env.BASE_URL + 'img/golf-course.svg'} alt={photo ? 'Your selected golf photo, displayed locally' : 'Sample illustrated golf lie'} onError={() => {if (photo) {setPhoto(''); setError('This image could not be opened. Please choose another JPG, PNG, or WebP.'); if (file.current) file.current.value = '';}}}/><span>{photo ? 'YOUR LOCAL PREVIEW' : 'ILLUSTRATED SAMPLE'}</span></div>
        <label className="upload-label" htmlFor="lie-photo">Add a photo to preview (optional)</label>
        <input ref={file} id="lie-photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={e => {
          const f = e.target.files?.[0]; if (!f) return;
          if (!['image/jpeg', 'image/png', 'image/webp'].includes(f.type) || f.size > 10 * 1024 * 1024) {setError('Choose a JPG, PNG, or WebP image under 10 MB.'); e.target.value = ''; return;}
          setError(''); setPhoto(URL.createObjectURL(f)); setResult(false);
        }}/>
        <p className="input-note">JPG, PNG, or WebP · up to 10 MB. Stays in your browser; never uploaded or analyzed.</p>
        {error && <p role="alert" className="input-error">{error}</p>}
        <fieldset><legend>01 / Choose the lie</legend><div className="lie-options">{lies.map(l => <button type="button" key={l} aria-pressed={lie === l} onClick={() => {setLie(l); setResult(false);}}>{l}</button>)}</div></fieldset>
        <div className="distance-control"><label htmlFor="distance">02 / Distance to target <strong>{distance} yd</strong></label><input id="distance" type="range" min="20" max="220" step="10" value={distance} onChange={e => {setDistance(Number(e.target.value)); setResult(false);}}/><div><span>20 yards</span><span>220 yards</span></div></div>
        <button className="btn-ink demo-submit" onClick={() => setResult(true)}>Show sample advice ↗</button><button className="reset-demo" onClick={reset}>Reset demo</button>
      </div>
      <div id="shot-result" ref={output} tabIndex={-1} className="demo-output" aria-label="Sample shot advice" aria-live="polite" aria-atomic="true">
        <div className="output-top"><span>GOLF AI / SHOT NOTES</span><span className="demo-pill">DEMO</span></div>
        {result ? <><p className="shot-context">{lie.toUpperCase()} · {distance} YARDS</p><h3>{title}</h3><p className="shot-advice">{advice}</p><div className="shot-check"><strong>Before you commit</strong><p>Check the lie, wind, slope, hazards, and your own carry distances. These examples do not account for those conditions.</p></div><p className="output-footnote">Illustrative guidance only. Your photo is not used to generate this result.</p></> : <div className="demo-empty"><span aria-hidden="true">↗</span><h3>A little context.<br/>A clearer decision.</h3><p>Choose your lie and distance, then select “Show sample advice” to explore the concept.</p></div>}
      </div>
    </div>
  </Section>;
}
