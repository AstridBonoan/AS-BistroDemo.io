import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'ghost' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bistro-orange'

const variants: Record<Variant, string> = {
  primary:
    'bg-bistro-orange text-bistro-ink shadow-soft hover:bg-bistro-ember active:scale-[0.98]',
  ghost:
    'bg-white/5 text-bistro-cream hover:bg-white/10 border border-white/10',
  outline:
    'border border-bistro-cream/25 text-bistro-cream hover:border-bistro-orange/60 hover:text-bistro-orange',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

type LinkButtonProps = {
  children: ReactNode
  to: string
  variant?: Variant
  className?: string
}

export function LinkButton({
  children,
  to,
  variant = 'primary',
  className = '',
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
