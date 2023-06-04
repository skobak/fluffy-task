import React from 'react'

interface AddButtonProps {
  onClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Add</button>
}

export default AddButton
