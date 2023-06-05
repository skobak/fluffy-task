import React from 'react'
import { Cat } from '../../models/Cat'
import CardHeader from './components/CardHeader'
import PlaceholderImage from './images/catPlaceholder.svg'

interface CardProps {
  cat: Cat
  editClicked: () => void
  deleteClicked: () => void
}

const Card: React.FC<CardProps> = ({ cat, editClicked, deleteClicked }) => {
  return (
    <div
      className="m-4 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
      role="article"
      aria-label={cat.name}
    >
      {/* Here we are drilling props, since we don't know yet the complexity of the app 
      And keep the Context(State) as simple as possible */}
      <CardHeader editClicked={editClicked} deleteClicked={deleteClicked} />
      <div className="md:flex">
        <div className="p-10 md:shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={cat.photo ? cat.photo : PlaceholderImage}
            alt="Cat photo"
          />
        </div>
        <div className="p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {cat.name}
          </h2>
          {!cat.bio && (
            <p className="mt-2 italic text-gray-300">No description provided</p>
          )}
          {cat.bio && <p className="mt-2 text-gray-500">{cat.bio}</p>}
        </div>
      </div>
    </div>
  )
}

export { Card }
