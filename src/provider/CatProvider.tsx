import { createContext, useState } from 'react'

export type Cat = {
  id: string
  photo: string
  name: string
  birthdayDate: string
  gender: string
  bio: string
}

type CatContextType = {
  cats: Cat[]
  addCat: (cat: Cat) => void
  updateCat: (cat: Cat) => void
  deleteCat: (id: string) => void
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

export const CatProvider: React.FC = ({ children }) => {
  const [cats, setCats] = useState<Cat[]>([])

  const addCat = (cat: Cat) => setCats((prevCats) => [...prevCats, cat])

  const updateCat = (updatedCat: Cat) =>
    setCats((prevCats) =>
      prevCats.map((cat) => (cat.id === updatedCat.id ? updatedCat : cat))
    )

  const deleteCat = (id: string) =>
    setCats((prevCats) => prevCats.filter((cat) => cat.id !== id))

  return (
    <CatContext.Provider value={{ cats, addCat, updateCat, deleteCat }}>
      {children}
    </CatContext.Provider>
  )
}
