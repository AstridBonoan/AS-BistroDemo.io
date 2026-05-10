import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

function navClass(isActive: boolean) {
  return [
    'text-sm font-medium tracking-wide transition-colors',
    isActive
      ? 'text-bistro-orange'
      : 'text-bistro-cream/80 hover:text-bistro-cream',
  ].join(' ')
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={[
          'sticky top-0 z-50 border-b border-white/5 transition-[background,backdrop-filter,box-shadow] duration-300',
          scrolled
            ? 'bg-bistro-ink/80 shadow-soft backdrop-blur-xl'
            : 'bg-bistro-ink/40 backdrop-blur-md',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group flex flex-col leading-none"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-xl tracking-tight text-bistro-cream transition group-hover:text-bistro-orange sm:text-2xl">
              A.S. Bistro
            </span>
            <span className="text-[10px] font-light uppercase tracking-[0.28em] text-bistro-cream-muted">
              Urban kitchen
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => navClass(isActive)}>
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-bistro-cream md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-current"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-current"
                animate={open ? { opacity: 0, x: 6 } : { opacity: 1, x: 0 }}
              />
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-current"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-bistro-ink/95 px-6 pb-10 pt-24 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile primary">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <NavLink
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'block rounded-2xl px-4 py-4 text-2xl font-display',
                        isActive
                          ? 'bg-bistro-orange/15 text-bistro-orange'
                          : 'text-bistro-cream hover:bg-white/5',
                      ].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <p className="mt-10 text-sm text-bistro-cream-muted">
              Tonight’s service begins at 5:00 — walk-ins welcome at the bar.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
