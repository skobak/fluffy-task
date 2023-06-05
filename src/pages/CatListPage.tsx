import { useContext } from 'react'
import NewCard from '../components/NewCard'
import { Cat, CatContext } from '../provider/CatProvider'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'

const CatListPage: React.FC = () => {
  const { cats, addCat, deleteCat, updateCat } = useContext(CatContext)

  const newCatBlank: Cat = {
    id: uuidv4(),
    name: 'The Cat',
    birthdayDate: '2021-01-01',
    bio: '',
    photo: '',
    gender: 'female'
  }

  return (
    <div className="flex w-full flex-wrap gap-4">
      {cats.map((cat: Cat) => (
        <div key={cat.id}>
          <Card title={cat.name} description={cat.bio} />
          <button onClick={() => deleteCat(cat.id)}>Delete</button>
          <button onClick={() => updateCat({ ...cat, name: 'The Cat2' })}>
            Update
          </button>
        </div>
      ))}
      <div>
        <NewCard onClick={() => addCat(newCatBlank)} />
      </div>
    </div>
  )
}

export default CatListPage
