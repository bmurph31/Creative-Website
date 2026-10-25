import {useEffect, useRef, useState} from 'react';
import {brand} from '../lib/content';

export function Chrome() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {setOpen(false); toggle.current?.focus();}
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return <>
    <a className="skip-link" href="#wine">Skip to content</a>
    <header className="golf-header">
      <a href="#top" className="golf-wordmark" aria-label="Golf AI home">GOLF<span>AI</span><small>YOUR POCKET CADDY</small></a>
      <div className="header-actions">
        <a href="#demo" className="btn-wine"><span className="t-micro">Try the demo ↗</span></a>
        <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="golf-menu" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu +'}</button>
      </div>
      {open && <nav id="golf-menu" aria-label="Main navigation">
        {brand.nav.map((item, i) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item.label} <b aria-hidden="true">↗</b></a>)}
      </nav>}
    </header>
  </>;
}
