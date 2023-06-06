import { Cat } from '../../models/Cat'
export type CardFormData = Omit<Cat, 'id' | 'photo'>
