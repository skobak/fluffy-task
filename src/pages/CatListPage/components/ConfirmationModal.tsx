import React from 'react'
import DialogConfirmation from '../../../components/DialogConfirmation'
import { Cat } from '../../../models/Cat'

interface ConfirmationModalProps {
  currentCat: Cat | null
  onClose: () => void
  deleteCat: (id: string) => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  currentCat,
  onClose,
  deleteCat
}) => {
  const handleConfirm = () => {
    onClose()
    deleteCat(currentCat?.id || '')
  }

  const message = `Are you sure you want to delete ${currentCat?.name} ?`

  return (
    <dialog open>
      <DialogConfirmation
        cancel={onClose}
        confirm={handleConfirm}
        message={message}
        imageURL={currentCat?.photo}
      />
    </dialog>
  )
}

export default ConfirmationModal
