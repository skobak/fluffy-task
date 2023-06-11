import { createContext } from 'react'
import useCatProvider from '../hooks/useCatProvider'
import { Cat } from '../models/Cat'

type CatMethodsContextType = {
  addCat: (cat: Cat) => void
  updateCat: (cat: Cat) => void
  deleteCat: (id: string) => void
}

const CatMethodsContextDefaultValues: CatMethodsContextType = {
  addCat: () => {
    /* do nothing */
  },
  updateCat: () => {
    /* do nothing */
  },
  deleteCat: () => {
    /* do nothing */
  }
}

export const CatsContext = createContext<Cat[]>([])
export const CatMethodsContext = createContext<CatMethodsContextType>(
  CatMethodsContextDefaultValues
)

type ContainerProps = {
  children: React.ReactNode
}

export const CatProvider: React.FC<ContainerProps> = ({ children }) => {
  const { cats, addCat, updateCat, deleteCat } = useCatProvider()

  return (
    <CatMethodsContext.Provider value={{ addCat, updateCat, deleteCat }}>
      <CatsContext.Provider value={cats}>{children}</CatsContext.Provider>
    </CatMethodsContext.Provider>
  )
}
