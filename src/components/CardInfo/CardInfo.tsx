import React from 'react'
import { Cat } from '../../models/Cat'
import CatPhoto from '../CatPhoto'

type CardInfoProps = {
  cat: Cat
  onCloseClicked: () => void
}

const CardInfo: React.FC<CardInfoProps> = ({ cat, onCloseClicked }) => {
  const { name, bio, photo, gender, birthdayDate } = cat
  const birthdayDateString = birthdayDate
    ? new Date(birthdayDate).toLocaleDateString('en-US')
    : ''

  return (
    <div
      className="container mx-auto w-full  min-w-full  max-w-5xl overflow-auto rounded-lg
    bg-white p-4 shadow-lg sm:p-6 lg:p-8
    "
    >
      <div className="mb-4 flex justify-end">
        <button
          onClick={onCloseClicked}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Close
        </button>
      </div>
      <div className="m-4 flex items-center rounded bg-gray-100 shadow-sm">
        <CatPhoto photo={photo} alt={`Photo of ${name}`} />
      </div>
      <div>
        <div className="my-4 flex flex-row gap-4">
          <p className="mt-2 text-sm text-gray-400">
            Day of birth: {birthdayDateString}
          </p>
          <p className="mt-2 text-sm text-gray-400">Gender: {gender}</p>
        </div>
        <h2 className="break-words text-xl font-medium leading-6 text-gray-900">
          {name}
        </h2>
        {!bio && (
          <p className="mt-2 italic text-gray-300">No description provided</p>
        )}
        {bio && (
          <p className="mt-2 break-words text-base text-gray-500">{cat.bio}</p>
        )}
      </div>
    </div>
  )
}

export default CardInfo
