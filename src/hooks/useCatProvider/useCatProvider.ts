import { useCallback, useEffect, useState } from 'react'
import { getFromLocalStorage, saveToLocalStorage } from '../../utils'

// This hook is act as a provider for cats data
// and fake backend with localStorage
export type Cat = {
  id: string
  photo: string
  name: string
  birthdayDate: string
  gender: string
  bio: string
}

export const useCatProvider = () => {
  const [cats, setCats] = useState<Cat[]>([])

  const addCat = useCallback((cat: Cat) => {
    setCats((prevCats) => [...prevCats, cat])
  }, [])

  const updateCat = useCallback((updatedCat: Cat) => {
    setCats((prevCats) =>
      prevCats.map((cat) => (cat.id === updatedCat.id ? updatedCat : cat))
    )
  }, [])

  const deleteCat = useCallback((id: string) => {
    setCats((prevCats) => prevCats.filter((cat) => cat.id !== id))
  }, [])

  // Load cats from localStorage first time
  useEffect(() => {
    const cats = getFromLocalStorage('cats')
    if (cats) {
      setCats(JSON.parse(cats))
    }
  }, [])

  // Sync with localStorage on each event to keep the sate updated
  useEffect(() => {
    saveToLocalStorage('cats', JSON.stringify(cats))
  }, [addCat, updateCat, deleteCat, cats])

  return { cats, addCat, updateCat, deleteCat }
}
