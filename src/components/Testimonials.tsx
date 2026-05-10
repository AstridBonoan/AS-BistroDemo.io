import { motion } from 'framer-motion'
import { Container } from './Container'

const quotes = [
  {
    quote:
      'The kind of place you save for birthdays — then end up at twice a month.',
    name: 'Elaine M.',
    detail: 'The Infatuation',
  },
  {
    quote:
      'Plates are confident without shouting. Wine pairings feel like a quiet flex.',
    name: 'Jordan K.',
    detail: 'Guest, March 2026',
  },
  {
    quote:
      'Bar seats are the best theater in SoHo. Order the crudo and stay for amaro.',
    name: 'Priya S.',
    detail: 'Guest, February 2026',
  },
] as const

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container as="div">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
              Voices at the table
            </p>
            <h2 className="mt-2 font-display text-3xl text-bistro-cream sm:text-4xl">
              What guests remember
            </h2>
          </div>
          <p className="max-w-md text-sm text-bistro-cream-muted">
            Real hospitality leaves a trace — warmth, timing, a little surprise.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card"
            >
              <blockquote className="font-display text-xl leading-snug text-bistro-cream">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium text-bistro-cream">{item.name}</span>
                <span className="mt-1 block text-bistro-cream-muted">
                  {item.detail}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
