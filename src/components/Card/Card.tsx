import React from 'react'
import { Cat } from '../../models/Cat'
import CardHeader from './components/CardHeader'
import PlaceholderImage from './images/catPlaceholder.svg'

interface CardProps {
  cat: Cat
  editClicked?: () => void
  deleteClicked?: () => void
}

const Card: React.FC<CardProps> = ({ cat, editClicked, deleteClicked }) => {
  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded bg-gray-50 shadow-md"
      role="article"
    >
      <div className="h-12">
        {editClicked && deleteClicked && (
          <CardHeader editClicked={editClicked} deleteClicked={deleteClicked} />
        )}
      </div>
      <figure className="flex h-full flex-col md:flex-row">
        <div className="m-4 flex items-center rounded bg-gray-100 shadow-sm md:w-32">
          <img
            className="max-h-64 w-full object-scale-down p-4 "
            src={cat.photo ? cat.photo : PlaceholderImage}
            alt={cat.photo ? `Photo of ${cat.name}` : 'Placeholder image'}
          />
        </div>
        <figcaption className="flex h-full max-h-full flex-1 flex-col overflow-hidden p-4 md:h-52">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {cat.name}
          </h2>
          {!cat.bio && (
            <p className="mt-2 italic text-gray-300">No description provided</p>
          )}
          {cat.bio && (
            <p className="mt-2 break-words text-gray-500">{cat.bio}</p>
          )}
        </figcaption>
      </figure>
    </div>
  )
}

export { Card }
