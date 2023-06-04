import { useState } from 'react'
import Card from './Card'

function App() {
  // add
  const [serverMessage, setServerMessage] = useState('')
  const sendMockPostRequest = async () => {
    setServerMessage('Loading...')
    const response = await fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Hello Mock Service Worker' })
    })
    const data = await response.json()
    setServerMessage(data.message)
    console.log(data)
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This is a boilerplate build with Vite, React 18, TypeScript,
              Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.
            </p>

            <p>Add lint-staged working</p>
            <button
              id="mockServerButton"
              className="mt-10 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => sendMockPostRequest()}
            >
              Test Post to Mock
            </button>
            {serverMessage && (
              <p id="mockServerMessage" className="mt-4 text-green-500">
                {serverMessage}
              </p>
            )}
            <Card
              title="Card Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
