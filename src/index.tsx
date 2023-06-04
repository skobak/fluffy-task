import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { worker } from './mocks/browser'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

root.render(<App />)
