import { useState, useEffect } from 'react'

import { isBreak } from '../utils/breakPoint.util'

export function useShowNavigation(breakPoint: any) {
  const [showNavigation, setShowNavigation] = useState(true)
  useEffect(() => {
    function updateShowNavigation() {
      if (breakPoint) setShowNavigation(isBreak(breakPoint, window.screen.width))
    }

    updateShowNavigation()

    window.addEventListener('resize', updateShowNavigation)
    return () => window.removeEventListener('resize', updateShowNavigation)
  }, [breakPoint])

  return showNavigation
}
