import { motion } from 'framer-motion'
import { Container } from './Container'
import { images } from '../data/images'

export function GallerySection() {
  return (
    <section className="border-y border-white/10 bg-bistro-charcoal/40 py-16 sm:py-24">
      <Container as="div">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
              @bc.luxery
            </p>
            <h2 className="mt-2 font-display text-3xl text-bistro-cream sm:text-4xl">
              From the pass &amp; the floor
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-bistro-cream underline-offset-4 hover:text-bistro-orange hover:underline"
          >
            Follow along
          </a>
        </div>

        <div className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4">
          {images.gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 shadow-soft sm:mb-4"
            >
              <img
                src={src}
                alt=""
                className="w-full object-cover transition duration-700 hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
