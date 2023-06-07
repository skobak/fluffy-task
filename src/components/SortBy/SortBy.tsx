import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

type SortOrder = 'ASC' | 'DESC'

type SortByProps = {
  onSort: (order: SortOrder) => void
}

const SortBy: React.FC<SortByProps> = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('ASC')

  const toggleSortOrder = () => {
    const newSortOrder: SortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC'
    setSortOrder(newSortOrder)
    onSort(newSortOrder)
  }

  const accessibleLabel =
    sortOrder === 'ASC'
      ? 'Sort by name in ascending order'
      : 'Sort by name in descending order'

  return (
    <button
      onClick={toggleSortOrder}
      id="sortButton"
      className="flex cursor-pointer items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={accessibleLabel}
    >
      <p>Sort By Name</p>
      {sortOrder === 'ASC' ? (
        <ChevronUpIcon className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
      )}
    </button>
  )
}

export default SortBy
