type CommandResult = { output: string; action?: 'clear' | 'projects' | 'email'; href?: string }

export function executeCommand(raw: string): CommandResult {
  const command = raw.trim().toLowerCase()
  const responses: Record<string, string> = {
    help: 'Available commands:\n  about     Meet Rohan\n  stack     Explore the toolkit\n  projects  Jump to selected work\n  status    Current role & focus\n  github    GitHub profile\n  email     Open an email draft\n  send --email you@example.com\n            Open a draft with your return address\n  clear     Clear the terminal\n\nTip: use ↑ / ↓ to revisit commands.',
    about: 'Rohan Maharaj — full-stack developer, educator, and technology enthusiast.\nGraduated cum laude in Application Development at Varsity College.\nFrom curiosity about forex bots to building web and mobile applications.',
    stack: 'Languages: C#, Java, Kotlin, JavaScript, TypeScript, Dart\nWeb: React, HTML5, CSS3, Node.js, REST APIs\nCloud: Firebase, Google Cloud Functions, Azure\nTools: Visual Studio, Android Studio, Git, GitHub, Flutter, Vite',
    status: 'Current role: Lecturer at Varsity College PMB (since August 2025).\nTeaching: Principles of UX/UI and Web Development.\nMindset: Build. Learn. Repeat.',
    github: 'Find my work at https://github.com/RohanM007\nUse the GitHub link in the contact card to visit.',
  }
  if (command === 'clear') return { action: 'clear', output: '' }
  if (command === 'projects') return { action: 'projects', output: 'Opening selected projects: Drakewoods, Mend, this portfolio, and Kingdom Kids.' }
  if (command === 'email') return { action: 'email', href: 'mailto:rohanmaharaj708@gmail.com?subject=Hello%20Rohan', output: 'Opening your email app with a draft. Send it there to finish.' }
  if (command.startsWith('send')) {
    const match = raw.trim().match(/^send\s+--email\s+([^\s@]+@[^\s@]+\.[^\s@]+)$/i)
    if (!match) return { output: 'Usage: send --email you@example.com\nEnter a valid return address to open an email draft.' }
    return { action: 'email', href: 'mailto:rohanmaharaj708@gmail.com?subject=Portfolio%20enquiry&body=' + encodeURIComponent('Hi Rohan,\n\nI would like to connect.\n\nReply to: ' + match[1]), output: 'Opening your email app with a draft. Nothing is sent automatically.' }
  }
  return { output: responses[command] ?? `Command not found: ${raw.trim()}. Type help for available commands.` }
}
