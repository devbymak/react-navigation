import React from 'react'

import { useShowNavigation } from '../hooks/useShowNavigation'
import { useSafeArea } from '../hooks/useSafeArea'

import './Navigation.style.css'

export interface NavigationProps {
  backgroundColor: string
  breakPoint: false | 'sm' | 'md' | 'lg'
  children?: React.ReactNode
  className: false | string
  columns: false | number
  safeAriaHeight: string
  height: string
  shadow: false | string
  style: {}
  variant: 'top' | 'bottom'
  zIndex: number | false
}

export function Navigation({
  backgroundColor,
  breakPoint,
  children,
  className,
  columns,
  height,
  safeAriaHeight,
  shadow,
  style,
  variant,
  zIndex,
}: NavigationProps) {
  const stylesProps = {}

  // backgroundColor
  Object.assign(stylesProps, {
    backgroundColor,
  })

  // columns
  columns &&
    Object.assign(stylesProps, {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      alignItems: 'center',
      justifyItems: 'center',
    })

  // height
  if (variant === 'bottom' && useSafeArea())
    Object.assign(stylesProps, {
      height: safeAriaHeight,
    })
  else
    Object.assign(stylesProps, {
      height,
    })

  // shadow
  shadow &&
    Object.assign(stylesProps, {
      boxShadow: shadow,
    })

  // variant
  switch (variant) {
    case 'bottom':
      Object.assign(stylesProps, {
        bottom: 0,
      })
      break
    default:
      Object.assign(stylesProps, {
        top: 0,
      })
      break
  }

  // z-index
  zIndex && Object.assign(stylesProps, {
    zIndex,
  })

  if (useShowNavigation(breakPoint))
    return (
      <nav className={`navigation ${className}`} style={{ ...stylesProps, ...style }}>
        {children}
      </nav>
    )
  else return null
}

Navigation.defaultProps = {
  backgroundColor: '#ffffff',
  breakPoint: false,
  className: false,
  columns: false,
  safeAriaHeight: '84px',
  height: '56px',
  shadow: '0px 0px 6px 0px rgba(0,0,0,0.1)',
  style: {},
  variant: 'top',
  zIndex: 10,
}
