export const INTRO_SESSION_KEY = 'rohan:intro-seen'

export function shouldShowIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.location.hash) return false
  try {
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== '1'
  } catch {
    // Storage can be unavailable in privacy modes; the intro is still skippable.
    return true
  }
}

export function rememberIntro() {
  try {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1')
  } catch {
    // The page must remain usable when storage is disabled.
  }
}
