import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../src/lib/intro.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
})
const { shouldShowIntro, rememberIntro } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('intro appears once per session and bypasses motion and deep-link visitors', () => {
  const originalWindow = globalThis.window
  const storage = new Map()
  let reducedMotion = false
  globalThis.window = {
    matchMedia: () => ({ matches: reducedMotion }),
    location: { hash: '' },
    sessionStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
    },
  }
  try {
    assert.equal(shouldShowIntro(), true)
    rememberIntro()
    assert.equal(shouldShowIntro(), false)
    storage.clear()
    reducedMotion = true
    assert.equal(shouldShowIntro(), false)
    reducedMotion = false
    window.location.hash = '#projects'
    assert.equal(shouldShowIntro(), false)
    window.location.hash = ''
    assert.equal(shouldShowIntro(), true)
    window.sessionStorage = {
      getItem() { throw new Error('Storage disabled') },
      setItem() { throw new Error('Storage disabled') },
    }
    assert.equal(shouldShowIntro(), true)
    assert.doesNotThrow(rememberIntro)
  } finally {
    if (originalWindow === undefined) delete globalThis.window
    else globalThis.window = originalWindow
  }
})
