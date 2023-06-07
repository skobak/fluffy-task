import React from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

interface CardHeaderProps {
  editClicked: () => void
  deleteClicked: () => void
}

const CardHeader: React.FC<CardHeaderProps> = ({
  editClicked,
  deleteClicked
}) => {
  return (
    <div className="flex justify-end space-x-2 p-2">
      <button
        onClick={editClicked}
        aria-label="Edit card"
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <PencilIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
      </button>
      <button
        onClick={deleteClicked}
        aria-label="Delete card"
        className="focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <TrashIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
      </button>
    </div>
  )
}

export default CardHeader
