import Avatar from 'components/Avatar'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4">
              <Avatar size="large" src="https://skob.io/ava.jpeg" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This is a boilerplate build with Vite, React 18, TypeScript,
              Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
