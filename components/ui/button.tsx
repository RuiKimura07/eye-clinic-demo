import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary: 'bg-brand text-white hover:bg-brand-600 active:bg-brand-700',
      secondary: 'bg-accent text-white hover:bg-blue-400 active:bg-blue-500',
      outline: 'border-2 border-brand text-brand bg-white hover:bg-brand-50 active:bg-brand-100',
      ghost: 'text-brand hover:bg-brand-50 active:bg-brand-100',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    if (asChild) {
      return (
        <span
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }