import { useCatProvider } from '../useCatProvider'
import { describe, expect, it } from 'vitest'
import { getFromLocalStorage } from '../../../utils'
import { act, renderHook } from '@testing-library/react'
import { Cat } from '../../../models/Cat'
const catMock: Cat = {
  id: '1',
  name: 'name',
  birthdayDate: '2021-01-01',
  gender: 'female',
  bio: 'bio',
  photo: ''
}
describe('useCatProvider hook', () => {
  it('should add the cat', () => {
    const { result } = renderHook(() => useCatProvider())
    act(() => {
      result.current.addCat(catMock)
    })
    expect(result.current.cats).toEqual([catMock])
  })
  it('should remove the cat', () => {
    const { result } = renderHook(() => useCatProvider())
    act(() => {
      result.current.addCat(catMock)
      result.current.deleteCat(catMock.id)
    })
    expect(result.current.cats).toEqual([])
  })
  it('should update the cat', () => {
    const { result } = renderHook(() => useCatProvider())
    act(() => {
      result.current.addCat(catMock)
      result.current.updateCat({ ...catMock, name: 'new name' })
    })
    expect(result.current.cats).toEqual([{ ...catMock, name: 'new name' }])
  })
})

describe('test useCatProvider hook with localStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('should add the cat to local storage', () => {
    const { result } = renderHook(() => useCatProvider())
    act(() => {
      result.current.addCat(catMock)
    })
    const catFromLocalStorage = getFromLocalStorage('cats')
    if (!catFromLocalStorage) throw new Error('No cats in local storage')
    expect(JSON.parse(catFromLocalStorage)).toEqual([catMock])
  })
  it('should remove the cat from local storage', () => {
    const { result } = renderHook(() => useCatProvider())
    act(() => {
      result.current.addCat(catMock)
      result.current.deleteCat(catMock.id)
    })
    const catFromLocalStorage = getFromLocalStorage('cats')
    expect(catFromLocalStorage).toEqual('[]')
  })
  it('should update the cat in local storage', () => {
    const { result } = renderHook(() => useCatProvider())
    act(() => {
      result.current.addCat(catMock)
      result.current.updateCat({ ...catMock, name: 'new name' })
    })
    const catFromLocalStorage = getFromLocalStorage('cats')
    if (!catFromLocalStorage) throw new Error('No cats in local storage')
    expect(JSON.parse(catFromLocalStorage)).toEqual([
      { ...catMock, name: 'new name' }
    ])
  })
})
