import { useState } from 'react'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type SearchBarProps = {
  onSearch: (search: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearch('')
    onSearch('')
  }

  return (
    <div className="flex items-center rounded-md border p-2">
      <input
        className="grow px-2"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      {search ? (
        <XMarkIcon
          className="h-5 w-5 cursor-pointer text-gray-500"
          onClick={clearSearch}
        />
      ) : (
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
      )}
    </div>
  )
}

export default SearchBar
