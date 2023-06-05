import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Cat } from '../../models/Cat'
import { v4 as uuidv4 } from 'uuid'
export type CardFormData = Omit<Cat, 'id' | 'photo'>

interface CardFormProps {
  cancel: () => void
  confirm: (data: CardFormData, fileData: string | null) => void
  cat: Cat | null
}

const schema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string(),
  birthdayDate: yup.date().required(),
  gender: yup.string().oneOf(['unknown', 'female', 'male']).required()
})

export const CardForm: React.FC<CardFormProps> = ({ cancel, confirm, cat }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CardFormData>({
    defaultValues: {
      name: cat?.name ?? '',
      bio: cat?.bio ?? '',
      birthdayDate: cat?.birthdayDate ? new Date(cat.birthdayDate) : new Date(),
      gender: cat?.gender ?? 'unknown'
    },
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: CardFormData) => {
    confirm(data, fileData)
  }
  const [fileData, setFileData] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // TODO: good to compress the image here, but out of scope for this demo
        setFileData(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const birthdayDate = watch('birthdayDate')

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          id="bio"
          {...register('bio')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="birthdayDate"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <DatePicker
          selected={birthdayDate}
          onChange={(date: Date) =>
            setValue('birthdayDate', date, { shouldValidate: true })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.birthdayDate && (
          <p className="mt-1 text-xs text-red-500">
            {errors.birthdayDate.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <select
          id="gender"
          {...register('gender')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="unknown">Unknown</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="file"
          className="block text-sm font-medium text-gray-700"
        >
          File
        </label>
        <input
          id="file"
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <button onClick={cancel}>Cancel</button>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  )
}

export default CardForm
