import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'gold' | 'outline';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart'
> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  glow?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-[#00D4FF] via-[#38BDF8] to-[#8B5CF6] text-[#050816] font-extrabold shadow-[0_8px_24px_-4px_rgba(0,212,255,0.45)] hover:shadow-[0_10px_28px_-2px_rgba(139,92,246,0.55)] border border-white/25',
  secondary:
    'bg-white/[0.07] backdrop-blur-xl border border-white/15 text-white hover:bg-white/12 hover:border-[#00D4FF]/50',
  ghost:
    'bg-white/[0.04] hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white',
  danger:
    'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-[0_6px_20px_rgba(239,68,68,0.4)]',
  gold:
    'bg-gradient-to-r from-[#FFD700] to-amber-500 text-black font-extrabold shadow-[0_6px_20px_rgba(255,215,0,0.35)]',
  outline:
    'bg-[#0B1326]/80 backdrop-blur-xl border border-[#00D4FF]/45 text-[#E2E8F0] hover:text-white hover:bg-[#00D4FF]/15 hover:border-[#00D4FF] shadow-[0_4px_16px_rgba(0,0,0,0.3)]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-xs rounded-xl whitespace-nowrap',
  md: 'h-11 px-5 text-sm rounded-xl whitespace-nowrap',
  lg: 'h-12 sm:h-13 px-6 text-sm sm:text-base rounded-2xl whitespace-nowrap',
  xl: 'h-14 px-8 text-base sm:text-lg rounded-2xl whitespace-nowrap',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      glow = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 font-sans font-bold tracking-tight cursor-pointer',
          'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue/50',
          'disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            <span className="relative z-10">{children}</span>
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
        {!disabled && !isLoading && variant === 'primary' && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
