import React from 'react'

import './Navigation.style.css'

export interface NavigationProps {
  variant: string
  zIndex: string
  columns: Number
  minHeight: string
  maxHeight: string
  styles: {}
  children?: any
}

export function Navigation({
  variant,
  zIndex,
  columns,
  minHeight,
  styles,
  children,
}: NavigationProps) {
  const classes = []
  const stylesProps = {}

  // variant
  switch (variant) {
    case 'bottom':
      classes.push(variant)
      break
    default:
      classes.push('top')
      break
  }

  // z-index
  Object.assign(stylesProps, {
    zIndex,
  })

  // columns
  columns &&
    Object.assign(stylesProps, {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    })

  // height
  const height = minHeight
  Object.assign(stylesProps, {
    height,
  })

  const className: string = classes.join(' ')

  return (
    <nav className={`navigation ${className}`} style={{ ...stylesProps, ...styles }}>
      {children}
    </nav>
  )
}

Navigation.defaultProps = {
  variant: 'top',
  columns: 0,
  minHeight: '56px',
  maxHeight: '84px',
  zIndex: '10',
  styles: {
    boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyItems: 'center',
  },
}
