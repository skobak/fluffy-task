import React from 'react'
import { Cat } from '../../models/Cat'
import CatPhoto from '../CatPhoto'
import CardHeader from './components/CardHeader'

interface CardProps {
  cat: Cat
  editClicked?: () => void
  deleteClicked?: () => void
  openClicked: () => void
}

const Card: React.FC<CardProps> = ({
  cat,
  editClicked,
  deleteClicked,
  openClicked
}) => {
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
          <CatPhoto photo={cat.photo} alt={`Photo of ${cat.name}`} />
        </div>
        <figcaption className="flex flex-1 flex-col overflow-hidden p-4 ">
          <h2 className="max-h-10 overflow-hidden break-words text-sm font-semibold uppercase text-indigo-500">
            {cat.name}
          </h2>
          <div className="max-h-20 overflow-hidden">
            {!cat.bio && (
              <p className="mt-2 italic text-gray-300">
                No description provided
              </p>
            )}
            {cat.bio && (
              <p className="mt-2 break-words text-gray-500">{cat.bio}</p>
            )}
          </div>
          <div className="flex-1"></div>
          <div className="bg-red-400">
            <button
              onClick={openClicked}
              className="
              flex h-12 w-full
              items-center justify-center
              bg-red-400
              text-white
              hover:bg-red-500
              focus:outline-none
              focus:ring-2
              focus:ring-red-500
              focus:ring-offset-2
              "
            >
              <span className="sr-only">Open</span>
              Open
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export { Card }
