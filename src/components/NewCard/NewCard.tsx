import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

interface AddButtonProps {
  onClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Add new item"
      className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded text-gray-500
  shadow-md hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <PlusIcon className="h-12 w-12 " />
      <p>Add</p>
    </button>
  )
}

export default AddButton
