import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../src/lib/terminalCommands.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
})
const { executeCommand } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('profile commands work with mixed case and surrounding whitespace', () => {
  assert.match(executeCommand('  ABOUT  ').output, /Rohan Maharaj/)
  assert.match(executeCommand('STACK').output, /Kotlin/)
  assert.match(executeCommand('status').output, /Lecturer/)
  assert.match(executeCommand('help').output, /send --email/)
})

test('navigation and clear commands return explicit actions', () => {
  assert.equal(executeCommand('projects').action, 'projects')
  assert.deepEqual(executeCommand('clear'), { action: 'clear', output: '' })
})

test('email opens a draft addressed to the real portfolio contact', () => {
  const result = executeCommand('email')
  assert.equal(result.action, 'email')
  assert.ok(result.href.startsWith('mailto:rohanmaharaj708@gmail.com?'))
  assert.match(result.output, /Send it there/)
})

test('send validates the return address and never silently sends mail', () => {
  for (const command of ['send', 'send --email', 'send --email not-an-email', 'send --email a@b.com extra']) {
    assert.equal(executeCommand(command).action, undefined)
    assert.match(executeCommand(command).output, /Usage:/)
  }
  const result = executeCommand('send --email Hello+portfolio@example.com')
  assert.equal(result.action, 'email')
  const url = new URL(result.href)
  assert.match(url.searchParams.get('body'), /Hello\+portfolio@example\.com/)
  assert.match(result.output, /Nothing is sent automatically/)
})

test('unknown and shell-like input is text only', () => {
  const result = executeCommand('help; rm -rf /')
  assert.equal(result.action, undefined)
  assert.match(result.output, /Command not found/)
})
