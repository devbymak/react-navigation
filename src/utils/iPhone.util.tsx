export function detectIsIPhonesModelNewerThan8() {
  return (
    navigator.userAgent.includes('iPhone') &&
    !['320x568', '375x667', '414x736'].includes(
      `${window.screen.width}x${window.screen.height}`
    )
  )
}

export function isSafariToolBarHidden(intViewportHeight: number) {
  if (intViewportHeight < window.innerHeight) {
    return true
  } else {
    return false
  }
}
