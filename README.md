# Golf AI — Your Caddy in Your Pocket

Marketing venture website adapted from the existing Creative-Website React/Vite template. Preserves its frame, display typography, GSAP reveals, smooth scrolling, responsive sections, and GitHub Pages deployment.

## Venture
Golf AI proposes using a quick photo of a ball's lie, plus player-supplied context, to suggest the next shot. The mission is to bridge the knowledge gap between professionals and recreational golfers and reduce decision stress.

Initial market: North America and Europe; active adults ages 18–80 of all genders, with income available for golf and useful tools. Positioning: convenient, easy-to-use and affordable guidance. Planned business model: recurring subscriptions for frequent golfers, with repeat value intended to encourage renewals. Pricing and launch date are not set.

## Prototype boundaries
The demo is deterministic and uses only selected lie and distance. Optional photos are browser-local object URLs, never transmitted or analyzed. No AI backend, payment processing, account creation, or waitlist collection is represented as live. Contact opens an email draft to Brendan. All course/phone illustrations are original SVG assets.

## Development
- pnpm install --frozen-lockfile
- pnpm run dev
- pnpm exec tsc --noEmit
- pnpm run build

The existing GitHub Actions workflow builds and deploys main to https://bmurph31.github.io/Creative-Website/.
