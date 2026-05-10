import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Testimonials } from '../components/Testimonials'
import { GallerySection } from '../components/GallerySection'
import { LinkButton } from '../components/Button'
import { images } from '../data/images'

export function Home() {
  return (
    <>
      <Hero />

      <section className="py-14 sm:py-20">
        <Container as="div">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className="order-2 overflow-hidden rounded-3xl border border-white/10 shadow-card lg:order-1"
            >
              <img
                src={images.plate1}
                alt=""
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                loading="lazy"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
                The kitchen
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-bistro-cream sm:text-4xl">
                Ingredients with a story, cooked with restraint.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-bistro-cream-muted sm:text-base">
                We work with farms and fishmongers we know by name. The menu
                shifts weekly — a little more acid here, a little more smoke
                there — so the room always feels alive.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton to="/menu">Explore the menu</LinkButton>
                <LinkButton to="/about" variant="ghost" className="sm:min-w-[9rem]">
                  Our story
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-bistro-charcoal/35 py-14 sm:py-20">
        <Container as="div">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'The bar',
                body: 'Natural wine, classic cocktails, and amaro when you need a soft landing.',
              },
              {
                title: 'The room',
                body: 'Low light, linen, and sound that lets you hear your favorite person.',
              },
              {
                title: 'The pace',
                body: 'Courses when you want them — or a feast of small plates if you don’t.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft"
              >
                <h3 className="font-display text-2xl text-bistro-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bistro-cream-muted">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container as="div">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
                Tonight
              </p>
              <h2 className="mt-3 font-display text-3xl text-bistro-cream sm:text-4xl">
                A corner table, or the best seat in the house.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-bistro-cream-muted">
                Tell us what you’re celebrating — we’ll take care of the rest.
              </p>
              <Link
                to="/reservations"
                className="mt-6 inline-flex text-sm font-semibold text-bistro-orange underline-offset-4 hover:underline"
              >
                Book now →
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                  <img
                    src={images.interior}
                    alt=""
                    className="h-56 w-full object-cover sm:h-full sm:min-h-[280px]"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                  <img
                    src={images.bar}
                    alt=""
                    className="h-56 w-full object-cover sm:h-full sm:min-h-[280px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Testimonials />
      <GallerySection />

      <section className="pb-20 pt-6">
        <Container as="div">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-bistro-orange/25 bg-gradient-to-br from-bistro-orange/15 via-transparent to-bistro-gold/10 p-8 text-center shadow-card sm:p-12"
          >
            <h2 className="font-display text-3xl text-bistro-cream sm:text-4xl">
              First time? Start at the bar.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-bistro-cream/85 sm:text-base">
              Two seats, a pour of something sparkling, and whatever the kitchen
              is most excited about. No agenda required.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton to="/contact">Get directions</LinkButton>
              <LinkButton to="/menu" variant="outline">
                Peek the menu
              </LinkButton>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
