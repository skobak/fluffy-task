export type CatGender = 'unknown' | 'female' | 'male'

export interface Cat {
  id: string
  name: string
  photo?: string
  birthdayDate?: Date
  gender?: CatGender
  bio?: string
}
