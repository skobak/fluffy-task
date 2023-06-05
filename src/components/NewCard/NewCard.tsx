import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

interface AddButtonProps {
  onClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="m-2 flex h-full w-full flex-col items-center justify-center rounded bg-white p-4 shadow-md"
    >
      <PlusIcon className="h-12 w-12 text-gray-500" />
      <p className="text-gray-500">Add</p>
    </div>
  )
}

export default AddButton
