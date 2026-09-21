import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../src/lib/intro.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
})
const { INTRO_DURATION, INTRO_FADE_DURATION } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('five-second intro reserves time for its fade before completing', () => {
  assert.equal(INTRO_DURATION, 5000)
  assert.ok(INTRO_FADE_DURATION > 0 && INTRO_FADE_DURATION < INTRO_DURATION)
})
