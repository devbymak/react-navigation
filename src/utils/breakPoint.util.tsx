export function isBreak(size: string, windowSize: number) {
  if (size === 'sm' && windowSize > 640) return false
  else if (size === 'md' && windowSize > 768) return false
  else if (size === 'lg' && windowSize > 978) return false
  else return true
}
