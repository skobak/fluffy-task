import CatListPage from '../pages/CatListPage'
import { CatProvider } from '../provider/CatProvider'

function App() {
  return (
    <CatProvider>
      <div className="relative overflow-hidden bg-white">
        <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Furry Friends
              </h1>
              <div>
                <CatListPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CatProvider>
  )
}

export default App
