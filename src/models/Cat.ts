export type CatGender = 'unknown' | 'female' | 'male'

export interface Cat {
  id: string
  photo?: string
  name?: string
  birthdayDate?: Date
  gender?: CatGender
  bio?: string
}
