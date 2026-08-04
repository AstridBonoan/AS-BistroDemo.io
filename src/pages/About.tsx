import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { LinkButton } from '../components/Button'
import { images } from '../data/images'

export function About() {
  return (
    <>
      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container as="div">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
                About
              </p>
              <h1 className="mt-3 font-display text-4xl text-bistro-cream sm:text-5xl">
                A small restaurant with a big sense of occasion.
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-bistro-cream-muted sm:text-base">
                B&C Luxery began as a pop-up supper club — long tables, vinyl
                records, and recipes scribbled on the backs of wine boxes. When
                we found this Mercer Street room, we kept the spirit: low
                pretense, high craft, and a team that treats strangers like
                regulars.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-bistro-cream-muted sm:text-base">
                Today, the kitchen is led by Chef Amélie Sato and a crew obsessed
                with the moment a sauce meets the plate — the quiet chemistry
                that makes a Tuesday feel like a celebration.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton to="/menu">See the menu</LinkButton>
                <LinkButton to="/contact" variant="ghost">
                  Visit us
                </LinkButton>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-white/10 shadow-card"
            >
              <img
                src={images.interior}
                alt=""
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-bistro-charcoal/40 py-16 sm:py-20">
        <Container as="div">
          <h2 className="font-display text-3xl text-bistro-cream sm:text-4xl">
            Values we plate every night
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Seasonality first',
                text: 'We buy what tastes best right now — not what’s easiest to order.',
              },
              {
                title: 'Hospitality with spine',
                text: 'Kindness is non‑negotiable; so is clarity about what we can do well.',
              },
              {
                title: 'The room matters',
                text: 'Sound, light, and pacing are ingredients — not afterthoughts.',
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-display text-2xl text-bistro-orange">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bistro-cream-muted">
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
