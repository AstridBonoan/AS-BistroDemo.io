import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LinkButton } from './Button'
import { images } from '../data/images'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35])

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[88dvh] overflow-hidden sm:min-h-[90dvh]"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={images.hero}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bistro-ink/55 via-bistro-ink/75 to-bistro-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,120,54,0.18),_transparent_55%)]" />
      </motion.div>

      <div className="mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:min-h-[90dvh] sm:px-6 sm:pb-20 lg:px-8">
        <motion.div style={{ opacity }} className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-medium uppercase tracking-[0.35em] text-bistro-cream-muted"
          >
            Mercer Street · Since 2016
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-bistro-cream sm:text-5xl lg:text-6xl"
          >
            A room built for{' '}
            <span className="italic text-bistro-orange">golden hour</span>
            <br className="hidden sm:block" /> and the last pour of the night.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-bistro-cream/85 sm:text-lg"
          >
            Fire-kissed small plates, thoughtful wine, and service that reads the
            room. Come as you are — leave a little more in love with the city.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <LinkButton to="/reservations" className="w-full sm:w-auto">
              Reserve a table
            </LinkButton>
            <LinkButton to="/menu" variant="outline" className="w-full sm:w-auto">
              View the menu
            </LinkButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
