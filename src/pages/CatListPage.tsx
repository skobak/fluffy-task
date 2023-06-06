import { useContext, useState } from 'react'
import NewCard from '../components/NewCard'
import { CatContext } from '../provider/CatProvider'
import Card from '../components/Card'
import DialogConfirmation from '../components/DialogConfirmation'
import { Cat } from '../models/Cat'
import CardForm from '../components/CardForm'
import SearchBar from '../components/SearchBar'
import SortBy from '../components/SortBy'
import { v4 as uuidv4 } from 'uuid'
import { CardFormData } from '../components/CardForm/CardFormData'

const CatListPage: React.FC = () => {
  const { cats, addCat, deleteCat, updateCat } = useContext(CatContext)

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentCat, setCurrentCat] = useState<Cat | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortByOrder, setSortByOrder] = useState<'ASC' | 'DESC'>('ASC')

  return (
    <div className="w-full p-8 md:p-0">
      {isEditMode && (
        <dialog open className="w-full backdrop:bg-red-400">
          <div className="fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center overflow-auto md:flex md:bg-black md:bg-opacity-50">
            <CardForm
              cat={currentCat}
              cancel={() => setIsEditMode(false)}
              confirm={async (data: CardFormData, fileData: string | null) => {
                console.log(data)
                if (currentCat == null) {
                  addCat({
                    id: uuidv4(),
                    ...data,
                    photo: fileData || ''
                  })
                } else {
                  updateCat({
                    id: currentCat?.id || '',
                    ...data,
                    photo:
                      fileData !== null ? fileData : currentCat?.photo || ''
                  })
                }
                setIsEditMode(false)
              }}
            />
          </div>
        </dialog>
      )}
      {isConfirmationOpen && (
        <dialog open>
          <DialogConfirmation
            cancel={() => setIsConfirmationOpen(false)}
            confirm={() => {
              setIsConfirmationOpen(false)
              deleteCat(currentCat?.id || '')
            }}
            message={`Are you sure you want to delete ${currentCat?.name} ?`}
            imageURL={currentCat?.photo}
          />
        </dialog>
      )}
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Furry Friends
      </h1>
      <SearchBar
        onSearch={function (search: string): void {
          setSearchQuery(search)
        }}
      />
      <div className="flex h-16 w-full justify-end gap-4">
        <SortBy
          onSort={function (order: 'ASC' | 'DESC'): void {
            setSortByOrder(order)
          }}
        />
      </div>
      <div className="mb-6 grid h-64  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cats
          .filter((cat: Cat) => {
            return (
              cat.name
                .toLowerCase()
                .includes(searchQuery.toLocaleLowerCase()) ||
              cat.bio
                ?.toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
            )
          })
          .sort((a: Cat, b: Cat) => {
            if (sortByOrder === 'ASC') {
              return a.name.localeCompare(b.name)
            } else {
              return b.name.localeCompare(a.name)
            }
          })
          .map((cat: Cat) => (
            <div key={cat.id} className="w-full md:h-72">
              <Card
                cat={cat}
                editClicked={() => {
                  setCurrentCat(cat)
                  setIsEditMode(true)
                }}
                deleteClicked={() => {
                  setIsConfirmationOpen(true)
                  setCurrentCat(cat)
                }}
              />
            </div>
          ))}
        <div className="w-full md:h-72">
          <NewCard
            onClick={() => {
              setCurrentCat(null)
              setIsEditMode(true)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CatListPage
