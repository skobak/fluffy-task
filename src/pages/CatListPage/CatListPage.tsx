import React, { useContext, useMemo, useState } from 'react'
import NewCard from '../../components/NewCard'
import { CatContext } from '../../provider/CatProvider'
import Card from '../../components/Card'
import { Cat } from '../../models/Cat'
import SearchBar from '../../components/SearchBar'
import SortBy from '../../components/SortBy'
import { filterCats, sortCats } from '../../utils'
import CardInfoModal from './components/CardInfoModal'
import CardFormModal from './components/CardFormModal'
import ConfirmationModal from './components/ConfirmationModal'

type SortOrder = 'ASC' | 'DESC'

const CatListPage: React.FC = () => {
  const { cats, addCat, deleteCat, updateCat } = useContext(CatContext)

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isCardInfoOpen, setIsCardInfoOpen] = useState(false)
  const [currentCat, setCurrentCat] = useState<Cat | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortByOrder, setSortByOrder] = useState<SortOrder>('ASC')

  const filteredCats = useMemo(
    () => filterCats(cats, searchQuery),
    [cats, searchQuery]
  )
  const filteredAndSortedCats = useMemo(
    () => sortCats(filteredCats, sortByOrder),
    [filteredCats, sortByOrder]
  )

  const openCard = (cat: Cat) => {
    setCurrentCat(cat)
    setIsCardInfoOpen(true)
  }

  const editCard = (cat: Cat) => {
    setCurrentCat(cat)
    setIsEditMode(true)
  }

  const deleteCard = (cat: Cat) => {
    setCurrentCat(cat)
    setIsConfirmationOpen(true)
  }

  const addNewCat = () => {
    setCurrentCat(null)
    setIsEditMode(true)
  }

  return (
    <div className="w-full p-8 md:p-0">
      {isCardInfoOpen && (
        <CardInfoModal
          currentCat={currentCat}
          onClose={() => setIsCardInfoOpen(false)}
        />
      )}
      {isEditMode && (
        <CardFormModal
          currentCat={currentCat}
          onClose={() => setIsEditMode(false)}
          addCat={addCat}
          updateCat={updateCat}
        />
      )}
      {isConfirmationOpen && (
        <ConfirmationModal
          currentCat={currentCat}
          onClose={() => setIsConfirmationOpen(false)}
          deleteCat={deleteCat}
        />
      )}

      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Furry Friends
      </h1>
      <SearchBar onSearch={(search) => setSearchQuery(search)} />

      <div className="flex h-16 w-full justify-end gap-4">
        <SortBy onSort={(order) => setSortByOrder(order)} />
      </div>

      <div
        id="listOfCats"
        className="mb-6 grid h-64  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {filteredAndSortedCats.map((cat: Cat) => (
          <div key={cat.id} className="w-full md:h-72">
            <Card
              cat={cat}
              openClicked={() => openCard(cat)}
              editClicked={() => editCard(cat)}
              deleteClicked={() => deleteCard(cat)}
            />
          </div>
        ))}
        <div className="w-full md:h-72">
          <NewCard onClick={addNewCat} />
        </div>
      </div>
    </div>
  )
}

export default CatListPage
