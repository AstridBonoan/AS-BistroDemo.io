import { Container } from '../components/Container'
import { ReservationForm } from '../components/ReservationForm'
import { images } from '../data/images'

export function Reservations() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <img
          src={images.heroAlt}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bistro-ink via-bistro-ink/94 to-bistro-ink" />
        <Container as="div" className="relative py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bistro-orange">
            Reservations
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-bistro-cream sm:text-5xl">
            Save your seat — we’ll save the energy.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bistro-cream-muted sm:text-base">
            For parties of seven or more, private dining, or same-day changes,
            call us — we’re quicker on the phone.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container as="div">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <img
                  src={images.plate3}
                  alt=""
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="font-display text-2xl text-bistro-cream">
                  House notes
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-bistro-cream-muted">
                  <li>15-minute grace period — text us if you’re close.</li>
                  <li>Bar is first-come; kitchen serves the full menu.</li>
                  <li>Major allergies: we’ll do our best with advance notice.</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ReservationForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
