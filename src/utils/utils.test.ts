import { Cat } from '../models/Cat'
import { filterCats, sortCats } from '.'

describe('catUtils', () => {
  const cats: Cat[] = [
    { id: '1', name: 'Aben', bio: 'I am Fluffy.' },
    { id: '2', name: 'Whiskers', bio: 'I like to hide.' },
    { id: '3', name: 'Furry', bio: 'I am very nice.' }
  ]

  describe('filterCats', () => {
    it('filters cats based on a search query in name', () => {
      const result = filterCats(cats, 'fluffy')
      expect(result).toEqual([{ id: '1', name: 'Aben', bio: 'I am Fluffy.' }])
    })

    it('filters cats based on a search query in bio', () => {
      const result = filterCats(cats, 'hide')
      expect(result).toEqual([
        { id: '2', name: 'Whiskers', bio: 'I like to hide.' }
      ])
    })
  })

  describe('sortCats', () => {
    it('sorts cats in ascending order', () => {
      const result = sortCats(cats, 'ASC')
      expect(result).toEqual([
        { id: '1', name: 'Aben', bio: 'I am Fluffy.' },
        { id: '3', name: 'Furry', bio: 'I am very nice.' },
        { id: '2', name: 'Whiskers', bio: 'I like to hide.' }
      ])
    })

    it('sorts cats in descending order', () => {
      const result = sortCats(cats, 'DESC')
      expect(result).toEqual([
        { id: '2', name: 'Whiskers', bio: 'I like to hide.' },
        { id: '3', name: 'Furry', bio: 'I am very nice.' },
        { id: '1', name: 'Aben', bio: 'I am Fluffy.' }
      ])
    })
  })
})
