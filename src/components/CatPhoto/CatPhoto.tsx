import React from 'react'
import PlaceholderImage from './images/catPlaceholder.svg'

interface CatPhotoProps {
  photo?: string
  alt?: string
}

const CatPhoto: React.FC<CatPhotoProps> = ({ photo, alt }) => {
  return (
    <img
      className="max-h-64 w-full object-scale-down p-4 "
      src={photo ? photo : PlaceholderImage}
      alt={alt ? alt : 'Placeholder image'}
    />
  )
}

export default CatPhoto
