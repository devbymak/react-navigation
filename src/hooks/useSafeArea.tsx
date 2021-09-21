import { useEffect, useState } from 'react'

import {
  detectIsIPhonesModelNewerThan8,
  isSafariToolBarHidden,
} from '../utils/iPhone.util'

export function useSafeArea() {
  const [isInSafeArea, setIsInSafeArea] = useState(false)

  useEffect(() => {
    const intViewportHeight = window.innerHeight

    function updateIsInSafeAria() {
      setIsInSafeArea(isSafariToolBarHidden(intViewportHeight))
    }

    if (detectIsIPhonesModelNewerThan8()) {
      if (window.innerHeight >= window.screen.height - 50) setIsInSafeArea(true)
      else window.addEventListener('scroll', updateIsInSafeAria)
    }

    return () => window.removeEventListener('scroll', updateIsInSafeAria)
  }, [])

  return isInSafeArea
}