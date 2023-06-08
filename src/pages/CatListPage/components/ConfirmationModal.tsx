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
}) => (
  <dialog open>
    <DialogConfirmation
      cancel={onClose}
      confirm={() => {
        onClose()
        deleteCat(currentCat?.id || '')
      }}
      message={`Are you sure you want to delete ${currentCat?.name} ?`}
      imageURL={currentCat?.photo}
    />
  </dialog>
)

export default ConfirmationModal
