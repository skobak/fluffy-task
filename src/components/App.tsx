import CatListPage from '../pages/CatListPage'
import { CatProvider } from '../provider/CatProvider'

function App() {
  return (
    <CatProvider>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Furry Friends
      </h1>
      <CatListPage />
    </CatProvider>
  )
}

export default App
