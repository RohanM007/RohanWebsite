import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../src/lib/intro.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
})
const { shouldAnimateIntro, INTRO_DURATION, INTRO_FADE_DURATION } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('five-second intro animates according to motion preference, regardless of session history or hash', () => {
  const originalWindow = globalThis.window
  let reducedMotion = false
  globalThis.window = {
    matchMedia: () => ({ matches: reducedMotion }),
    location: { hash: '#projects' },
    sessionStorage: { getItem: () => '1' },
  }
  try {
    assert.equal(INTRO_DURATION, 5000)
    assert.ok(INTRO_FADE_DURATION > 0 && INTRO_FADE_DURATION < INTRO_DURATION)
    assert.equal(shouldAnimateIntro(), true)
    assert.equal(shouldAnimateIntro(), true)
    window.sessionStorage = { getItem() { throw new Error('Storage unavailable') } }
    assert.equal(shouldAnimateIntro(), true)
    reducedMotion = true
    assert.equal(shouldAnimateIntro(), false)
  } finally {
    if (originalWindow === undefined) delete globalThis.window
    else globalThis.window = originalWindow
  }
})
