export function Icon({ name, className = '', filled = false }) {
  return (
    <span className={`material-symbols-outlined ${filled ? 'fill-icon' : ''} ${className}`} aria-hidden="true">
      {name}
    </span>
  )
}

export function SectionBadge({ children }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/25 text-primary-container font-label-md uppercase tracking-wider">
      {children}
    </span>
  )
}

export function Logo({ size = 'md' }) {
  const box = size === 'md' ? 'w-10 h-10' : 'w-9 h-9'
  return (
    <div className={`${box} rounded-lg bg-surface-container-high border border-outline-variant/50 flex items-center justify-center text-primary-container shadow-inner shrink-0`}>
      <Icon name="terminal" className="text-[24px]" />
    </div>
  )
}
