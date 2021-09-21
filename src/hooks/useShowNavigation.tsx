import { useState, useLayoutEffect } from 'react'

import { isBreak } from '../utils/breakPoint.util'

export function useShowNavigation(breakPoint: any) {
  const [showNavigation, setShowNavigation] = useState(true)
  useLayoutEffect(() => {
    function updateShowNavigation() {
      if (breakPoint) setShowNavigation(isBreak(breakPoint, window.screen.width))
    }

    updateShowNavigation()

    window.addEventListener('resize', updateShowNavigation)
    return () => window.removeEventListener('resize', updateShowNavigation)
  }, [])

  return showNavigation
}
