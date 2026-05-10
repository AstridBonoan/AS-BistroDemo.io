import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../components/Container'
import { LinkButton } from '../components/Button'
import {
  menuByCategory,
  menuCategories,
  type MenuCategoryId,
} from '../data/menu'
import { images } from '../data/images'

export function Menu() {
  const [active, setActive] = useState<MenuCategoryId>('small')
  const items = useMemo(() => menuByCategory[active], [active])
  const meta = menuCategories.find((c) => c.id === active)

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <img
          src={images.plate2}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bistro-ink via-bistro-ink/92 to-bistro-ink" />
        <Container as="div" className="relative py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
            Menu
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-bistro-cream sm:text-5xl">
            Seasonal, fire-touched, meant to share.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bistro-cream-muted sm:text-base">
            A living document — some dishes may sail away mid-service when the
            last beautiful thing walks through the door.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton to="/reservations">Book a table</LinkButton>
            <a
              href="tel:+12125550108"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-bistro-cream transition hover:border-bistro-orange/50 hover:text-bistro-orange"
            >
              Call the host stand
            </a>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container as="div">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:gap-3 sm:px-0 sm:pb-0">
            {menuCategories.map((cat) => {
              const isOn = cat.id === active
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActive(cat.id)}
                  className={[
                    'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition',
                    isOn
                      ? 'border-bistro-orange/60 bg-bistro-orange/15 text-bistro-cream'
                      : 'border-white/10 bg-white/[0.03] text-bistro-cream/80 hover:border-white/20 hover:text-bistro-cream',
                  ].join(' ')}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-8"
            >
              {meta ? (
                <p className="max-w-2xl text-sm text-bistro-cream-muted">
                  {meta.blurb}
                </p>
              ) : null}

              <ul className="mt-8 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03] shadow-soft">
                {items.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-6 sm:py-6"
                  >
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h2 className="font-display text-xl text-bistro-cream sm:text-2xl">
                          {item.name}
                        </h2>
                        {item.dietary ? (
                          <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-bistro-cream-muted">
                            {item.dietary}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-bistro-cream-muted">
                        {item.description}
                      </p>
                    </div>
                    <p className="shrink-0 font-display text-xl text-bistro-orange">
                      ${item.price}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </>
  )
}
