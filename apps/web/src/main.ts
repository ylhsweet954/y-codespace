import './style.css'
import { getWorkspaceMessage } from '@y-codespace/shared'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <h1>pnpm workspace is ready</h1>
    <p>This app lives in <code>apps/web</code>.</p>
    <p>${getWorkspaceMessage()}</p>
  </main>
`
