import React from 'react'

interface DialogConfirmationProps {
  cancel: () => void
  confirm: () => void
  message: string
  imageURL?: string
}

const DialogConfirmation: React.FC<DialogConfirmationProps> = ({
  cancel,
  confirm,
  message,
  imageURL
}) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 p-4 sm:p-0">
      <div className="rounded-lg bg-white md:w-1/3">
        <div className="max-h-96 overflow-hidden">
          {imageURL && (
            <img src={imageURL} alt="cat" className="w-full object-cover" />
          )}
        </div>
        <div className="p-6">
          <p className="mb-4 text-lg">{message}</p>
          <div className="flex justify-end gap-4">
            <button
              className="mr-2 text-gray-700 hover:text-red-600"
              onClick={cancel}
            >
              Cancel
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={confirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogConfirmation
