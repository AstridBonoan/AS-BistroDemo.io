import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { LinkButton } from '../components/Button'

export function Contact() {
  return (
    <>
      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
            Contact
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-bistro-cream sm:text-5xl">
            We’re easy to find — harder to leave.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bistro-cream-muted sm:text-base">
            Questions about events, press, or a bottle you tasted last week?
            Send a note. For tonight’s seating, call the host stand.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container as="div">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft sm:p-8"
            >
              <h2 className="font-display text-2xl text-bistro-cream">Visit</h2>
              <address className="mt-4 not-italic text-sm leading-relaxed text-bistro-cream-muted">
                214 Mercer Street
                <br />
                New York, NY 10012
              </address>
              <div className="mt-6 space-y-2 text-sm">
                <a
                  href="tel:+12125550108"
                  className="block font-medium text-bistro-orange hover:underline"
                >
                  (212) 555‑0108
                </a>
                <a
                  href="mailto:hello@asbistro.demo"
                  className="block text-bistro-cream/90 hover:text-bistro-orange"
                >
                  hello@asbistro.demo
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton to="/reservations" className="w-full sm:w-auto">
                  Reservations
                </LinkButton>
                <a
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-bistro-cream transition hover:border-bistro-orange/50 hover:text-bistro-orange sm:w-auto"
                  href="https://maps.google.com/?q=214+Mercer+Street+New+York"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="overflow-hidden rounded-3xl border border-white/10 shadow-card"
            >
              <iframe
                title="B&C Luxery neighborhood map"
                className="h-72 w-full grayscale contrast-[1.05] sm:h-full sm:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0035%2C40.7245%2C-73.9965%2C40.7295&amp;layer=mapnik&amp;marker=40.7270%2C-74.0000"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-3xl border border-bistro-orange/20 bg-bistro-orange/10 p-6 text-sm text-bistro-cream/90"
          >
            <strong className="font-medium text-bistro-cream">{'Parking & transit:'}</strong>{' '}
            Street parking is limited after 6pm; we’re a short walk from the
            Broadway–Lafayette station. Valet partners rotate seasonally — ask
            when you book.
          </motion.div>
        </Container>
      </section>
    </>
  )
}
