import { useContext, useState } from 'react'
import NewCard from '../components/NewCard'
import { CatContext } from '../provider/CatProvider'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'
import DialogConfirmation from '../components/DialogConfirmation'
import { Cat } from '../models/Cat'

const CatListPage: React.FC = () => {
  const newCatBlank: Cat = {
    id: uuidv4(),
    name: 'The Cat',
    birthdayDate: '2021-01-01',
    bio: '',
    photo: '',
    gender: 'female'
  }
  const { cats, addCat, deleteCat, updateCat } = useContext(CatContext)

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [currentCat, setCurrentCat] = useState<Cat | null>(null)

  return (
    <div>
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
      <div className="flex w-full flex-wrap gap-4">
        {cats.map((cat: Cat) => (
          <div key={cat.id}>
            <Card
              cat={cat}
              editClicked={() => console.log('edit clicked')}
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
          <NewCard onClick={() => addCat(newCatBlank)} />
        </div>
      </div>
    </div>
  )
}

export default CatListPage
