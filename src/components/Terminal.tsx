import { useEffect, useRef, useState } from 'react'
import { CornerDownLeft, TerminalSquare } from 'lucide-react'
import { executeCommand } from '../lib/terminalCommands'

export default function Terminal({ preview = false }: { preview?: boolean }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<{ command: string; output: string }[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const outputRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (outputRef.current && history.length) outputRef.current.scrollTop = outputRef.current.scrollHeight
  }, [history])
  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    const command = input.trim()
    if (!command) return
    const result = executeCommand(command)
    if (result.action === 'clear') setHistory([])
    else setHistory(previous => [...previous.slice(-39), { command, output: result.output }])
    if (result.action === 'projects') document.getElementById('projects')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    if (result.action === 'email') window.location.href = result.href!
    setInput('')
    setHistoryIndex(-1)
  }
  return <div className={`terminal-window ${preview ? 'terminal-preview' : 'terminal-interactive'}`}>
    <div className="terminal-titlebar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>{preview ? 'rohan@portfolio: ~' : 'guest@rohan: ~/contact'}</span><TerminalSquare size={13} /></div>
    {preview ? <div className="terminal-body profile-code">
      <p className="command-line"><span>➜</span> ~ <strong>rohan.getProfile()</strong></p>
      <div className="code-object"><p>{'{'}</p><p>  <span>name</span>: <b>"Rohan Maharaj"</b>,</p><p>  <span>role</span>: <b>"Full-Stack Developer"</b>,</p><p>  <span>also</span>: <b>"Lecturer & lifelong learner"</b>,</p><p>  <span>stack</span>: [<b>"React"</b>, <b>"Kotlin"</b>, <b>"C#"</b>],</p><p>  <span>education</span>: <b>"Graduated cum laude"</b>,</p><p>  <span>mindset</span>: <b>"Build. Learn. Repeat."</b></p><p>{'}'}</p></div>
      <p className="command-line manifesto-command"><span>➜</span> ~ <strong>cat philosophy.txt</strong></p>
      <p className="terminal-quote">“If I have a vision in my head, I won’t stop<br className="desktop-break" /> until I’ve brought it to life.”</p>
      <p className="command-line terminal-ready"><span>➜</span> ~ <span className="terminal-cursor" aria-hidden="true" /></p>
      <a href="#terminal" className="terminal-hint">Try the interactive terminal below <span>↘</span></a>
    </div> : <>
      <div className="terminal-body terminal-output" ref={outputRef} role="log" aria-label="Terminal output" aria-live="polite">
        <p className="terminal-welcome">Rohan.dev interactive shell <span>v1.0</span></p>
        <p className="terminal-help">A different way to say hello.<br />Type <b>help</b> to see what you can do.</p>
        {history.map((entry, index) => <div className="terminal-entry" key={index}><p className="command-line"><span>➜</span> ~ {entry.command}</p><p className="command-result">{entry.output}</p></div>)}
      </div>
      <form className="terminal-input-row" onSubmit={submit}><label htmlFor="terminal-command"><span>➜</span> ~</label><input id="terminal-command" aria-label="Terminal command" autoComplete="off" autoCapitalize="off" spellCheck={false} placeholder="Type a command..." maxLength={500} value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => {
        if (event.key === 'ArrowUp' && history.length) {
          event.preventDefault()
          const next = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1)
          setHistoryIndex(next); setInput(history[next].command)
        } else if (event.key === 'ArrowDown' && historyIndex >= 0) {
          event.preventDefault()
          const next = historyIndex + 1
          setHistoryIndex(next >= history.length ? -1 : next); setInput(history[next]?.command ?? '')
        }
      }} /><button type="submit" aria-label="Run command"><CornerDownLeft size={17} /></button></form>
      <div className="terminal-shortcuts">{['help', 'about', 'stack', 'projects', 'status', 'clear'].map(command => <button key={command} onClick={() => { setInput(command); document.getElementById('terminal-command')?.focus() }}>{command}</button>)}</div>
    </>}
  </div>
}
