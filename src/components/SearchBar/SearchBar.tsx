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
    <div className="flex w-full items-center rounded-md border p-2">
      <input
        className="grow px-2"
        type="search"
        placeholder="Search..."
        name="search"
        value={search}
        onChange={handleSearchChange}
        aria-label="Search"
      />
      {search ? (
        <button
          aria-label="Clear search"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={clearSearch}
        >
          <XMarkIcon className="h-5 w-5 cursor-pointer text-gray-500" />
        </button>
      ) : (
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
      )}
    </div>
  )
}

export default SearchBar
