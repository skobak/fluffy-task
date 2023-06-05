import { useContext, useState } from 'react'
import NewCard from '../components/NewCard'
import { CatContext } from '../provider/CatProvider'
import Card from '../components/Card'
import DialogConfirmation from '../components/DialogConfirmation'
import { Cat } from '../models/Cat'
import CardForm, { CardFormData } from '../components/CardForm/CardForm'
import SearchBar from '../components/SearchBar'
import SortBy from '../components/SortBy'
import { v4 as uuidv4 } from 'uuid'

const CatListPage: React.FC = () => {
  const { cats, addCat, deleteCat, updateCat } = useContext(CatContext)

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentCat, setCurrentCat] = useState<Cat | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortByOrder, setSortByOrder] = useState<'ASC' | 'DESC'>('ASC')

  return (
    <div>
      <div>
        <SearchBar
          onSearch={function (search: string): void {
            setSearchQuery(search)
          }}
        />
      </div>
      <div>
        <SortBy
          onSort={function (order: 'ASC' | 'DESC'): void {
            setSortByOrder(order)
          }}
        />
      </div>
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
      {isEditMode && (
        <dialog open>
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
                  photo: fileData || ''
                })
              }
              setIsEditMode(false)
            }}
          />
        </dialog>
      )}
      <div className="flex w-full flex-wrap gap-4">
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
            <div key={cat.id}>
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
              <button onClick={() => updateCat({ ...cat, name: 'The Cat2' })}>
                Update
              </button>
            </div>
          ))}
        <div>
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
