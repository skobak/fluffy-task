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

  return (
    <div className="flex cursor-pointer items-center" onClick={toggleSortOrder}>
      <p>Sort By Name</p>
      {sortOrder === 'ASC' ? (
        <ChevronUpIcon className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
      )}
    </div>
  )
}

export default SortBy
