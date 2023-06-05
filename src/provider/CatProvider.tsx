import { createContext } from 'react'
import useCatProvider from '../hooks/useCatProvider'
import { Cat } from '../models/Cat'

type CatContextType = {
  cats: Cat[]
  addCat: (cat: Cat) => void
  updateCat: (cat: Cat) => void
  deleteCat: (id: string) => void
}

type ContainerProps = {
  children: React.ReactNode
}

const CatContextDefaultValues: CatContextType = {
  cats: [],
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

export const CatContext = createContext<CatContextType>(CatContextDefaultValues)

export const CatProvider: React.FC<ContainerProps> = (
  props: ContainerProps
) => {
  const { cats, addCat, updateCat, deleteCat } = useCatProvider()

  return (
    <CatContext.Provider value={{ cats, addCat, updateCat, deleteCat }}>
      {props.children}
    </CatContext.Provider>
  )
}
