import CardForm from '../../../components/CardForm'
import { Cat } from '../../../models/Cat'
import { v4 as uuidv4 } from 'uuid'
interface CardFormModalProps {
  currentCat: Cat | null
  onClose: () => void
  addCat: (cat: Cat) => void
  updateCat: (cat: Cat) => void
}

const CardFormModal: React.FC<CardFormModalProps> = ({
  currentCat,
  onClose,
  addCat,
  updateCat
}) => (
  <dialog open>
    <div className="fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center overflow-auto md:flex md:bg-black md:bg-opacity-50">
      <CardForm
        cat={currentCat}
        cancel={onClose}
        confirm={async (data, fileData) => {
          if (currentCat == null) {
            addCat({
              id: uuidv4(),
              ...data,
              photo: fileData || ''
            })
          } else {
            updateCat({
              id: currentCat.id || '',
              ...data,
              photo: fileData !== null ? fileData : currentCat.photo || ''
            })
          }
          onClose()
        }}
      />
    </div>
  </dialog>
)

export default CardFormModal
