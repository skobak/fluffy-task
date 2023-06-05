import PageContainer from '../layout'
import CatListPage from '../pages/CatListPage'
import { CatProvider } from '../provider/CatProvider'

function App() {
  return (
    <CatProvider>
      <PageContainer>
        <CatListPage />
      </PageContainer>
    </CatProvider>
  )
}

export default App
