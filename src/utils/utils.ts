import { Cat } from '../models/Cat'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function saveToLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value)
}

export function getFromLocalStorage(key: string): string | null {
  return localStorage.getItem(key)
}

type RequestMethod = 'POST' | 'GET'
type Payload = { data: string }
type ResponseData = { result: string }

export async function makeFakeRequest(
  type: RequestMethod,
  endPoint: string,
  payload: Payload
): Promise<ResponseData> {
  const requestOptions: RequestInit = {
    method: type,
    headers: {
      'Content-Type': 'application/json'
    },
    ...(type === 'POST' && { body: JSON.stringify(payload) })
  }

  const response = await fetch(`/${endPoint}`, requestOptions)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json() as Promise<ResponseData>
}

export const filterCats = (cats: Cat[], searchQuery: string): Cat[] => {
  return cats.filter(
    (cat: Cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.bio?.toLowerCase().includes(searchQuery.toLowerCase())
  )
}

export const sortCats = (cats: Cat[], sortByOrder: 'ASC' | 'DESC'): Cat[] => {
  return cats.sort((a: Cat, b: Cat) => {
    if (sortByOrder === 'ASC') {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })
}
