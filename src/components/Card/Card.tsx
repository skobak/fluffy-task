import React from 'react'
import PlaceholderImage from './images/catPlaceholder.svg'

interface CardProps {
  title: string
  description: string
  imgUrl?: string
  imgAlt?: string
}

const Card: React.FC<CardProps> = ({ title, description, imgUrl, imgAlt }) => {
  const finalImgUrl = imgUrl || PlaceholderImage
  const finalImgAlt = imgAlt || 'placeholder image'

  return (
    <div
      className="m-4 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
      role="article"
      aria-label={title}
    >
      <div className="md:flex">
        <div className="p-10 md:shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={finalImgUrl}
            alt={finalImgAlt}
          />
        </div>
        <div className="p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {title}
          </h2>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  )
}

export { Card }
