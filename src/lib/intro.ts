export const INTRO_DURATION = 5000
export const INTRO_FADE_DURATION = 350

export function shouldAnimateIntro() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
