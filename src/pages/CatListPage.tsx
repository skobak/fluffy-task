import { useContext } from 'react'
import NewCard from '../components/NewCard'
import { Cat, CatContext } from '../provider/CatProvider'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'

const CatListPage: React.FC = () => {
  const { cats, addCat } = useContext(CatContext)

  const newCatBlank: Cat = {
    id: uuidv4(),
    name: 'The Cat',
    birthdayDate: '2021-01-01',
    bio: '',
    photo: '',
    gender: 'female'
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-wrap">
      {cats.map((cat: Cat) => (
        <Card key={cat.id} title={cat.name} description={cat.bio} />
      ))}
      <NewCard onClick={() => addCat(newCatBlank)} />
    </div>
  )
}

export default CatListPage
