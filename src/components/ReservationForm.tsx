import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'

export function ReservationForm({ id }: { id?: string }) {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <motion.form
      id={id}
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-bistro-cream-muted">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-bistro-ink/60 px-4 py-3 text-bistro-cream outline-none ring-bistro-orange/40 placeholder:text-bistro-cream-muted/50 focus:border-bistro-orange/40 focus:ring-2"
            placeholder="Jordan Lee"
          />
        </label>
        <label className="block text-sm">
          <span className="text-bistro-cream-muted">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-bistro-ink/60 px-4 py-3 text-bistro-cream outline-none ring-bistro-orange/40 placeholder:text-bistro-cream-muted/50 focus:border-bistro-orange/40 focus:ring-2"
            placeholder="you@email.com"
          />
        </label>
        <label className="block text-sm">
          <span className="text-bistro-cream-muted">Date</span>
          <input
            required
            type="date"
            name="date"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-bistro-ink/60 px-4 py-3 text-bistro-cream outline-none ring-bistro-orange/40 focus:border-bistro-orange/40 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="text-bistro-cream-muted">Time</span>
          <select
            required
            name="time"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-bistro-ink/60 px-4 py-3 text-bistro-cream outline-none ring-bistro-orange/40 focus:border-bistro-orange/40 focus:ring-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option>5:00 PM</option>
            <option>5:30 PM</option>
            <option>6:00 PM</option>
            <option>6:30 PM</option>
            <option>7:00 PM</option>
            <option>7:30 PM</option>
            <option>8:00 PM</option>
            <option>8:30 PM</option>
            <option>9:00 PM</option>
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-bistro-cream-muted">Party size</span>
          <select
            required
            name="party"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-bistro-ink/60 px-4 py-3 text-bistro-cream outline-none ring-bistro-orange/40 focus:border-bistro-orange/40 focus:ring-2"
            defaultValue="2"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
            <option value="7+">7+ (we’ll call you)</option>
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-bistro-cream-muted">Occasion / notes</span>
          <textarea
            name="notes"
            rows={3}
            className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-bistro-ink/60 px-4 py-3 text-bistro-cream outline-none ring-bistro-orange/40 placeholder:text-bistro-cream-muted/50 focus:border-bistro-orange/40 focus:ring-2"
            placeholder="Anniversary, allergies, preferred seating…"
          />
        </label>
      </div>

      {sent ? (
        <p
          className="mt-6 rounded-2xl border border-bistro-orange/25 bg-bistro-orange/10 px-4 py-3 text-sm text-bistro-cream"
          role="status"
        >
          Thank you — this is a demo form. Wire it to your reservation platform
          when you’re ready to go live.
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto">
          Request reservation
        </Button>
        <p className="text-xs text-bistro-cream-muted">
          We’ll confirm by email within a few hours.
        </p>
      </div>
    </motion.form>
  )
}
