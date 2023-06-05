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
    <div className="flex justify-between p-2">
      <div></div>
      <div className="space-x-2">
        <button
          onClick={editClicked}
          aria-label="Edit"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <PencilIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
        </button>
        <button
          onClick={deleteClicked}
          aria-label="Delete"
          className="focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <TrashIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
        </button>
      </div>
    </div>
  )
}

export default CardHeader
