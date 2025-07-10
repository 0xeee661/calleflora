import React from 'react'

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const PrimaryButton = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = '',
  type = 'button',
  disabled = false,
}: PrimaryButtonProps) => {
  const baseClasses =
    'font-quicksand w-max flex min-h-[55px] cursor-pointer items-center justify-center rounded-[20px] border-2 border-white px-9 text-4xl font-bold tracking-widest text-white uppercase transition hover:bg-white/10'
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed hover:bg-transparent'
    : ''
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`

  // Si hay href, renderizar como enlace
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  // Si no hay href, renderizar como botón
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
