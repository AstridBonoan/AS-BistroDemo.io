import { Link } from 'react-router-dom'
import { Container } from './Container'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Resy', href: 'https://resy.com' },
] as const

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-bistro-charcoal/80">
      <Container as="div" className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl text-bistro-cream">A.S. Bistro</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-bistro-cream-muted">
              A candlelit room, a lively bar, and plates made for lingering.
              Seasonal cooking with a city pulse — reservations recommended.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-wider text-bistro-cream/90 transition hover:border-bistro-orange/50 hover:text-bistro-orange"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-bistro-cream-muted">
              Hours
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-bistro-cream/90">
              <li>Tue – Thu · 5:00 – 10:00</li>
              <li>Fri – Sat · 5:00 – 11:00</li>
              <li>Sun brunch · 11:00 – 3:00</li>
              <li className="text-bistro-cream-muted">Mon · private events</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-bistro-cream-muted">
              Visit
            </h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-bistro-cream/90">
              214 Mercer Street
              <br />
              New York, NY 10012
              <br />
              <a
                href="tel:+12125550108"
                className="mt-2 inline-block text-bistro-orange hover:underline"
              >
                (212) 555‑0108
              </a>
            </address>
            <Link
              to="/contact"
              className="mt-4 inline-block text-sm font-medium text-bistro-cream underline-offset-4 hover:text-bistro-orange hover:underline"
            >
              {'Directions & parking'}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-bistro-cream-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} A.S. Bistro. Demo site — not a real venue.</p>
          <div className="flex gap-6">
            <Link to="/menu" className="hover:text-bistro-cream">
              Menu
            </Link>
            <Link to="/reservations" className="hover:text-bistro-cream">
              Book a table
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
