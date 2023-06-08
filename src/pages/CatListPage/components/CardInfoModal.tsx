import CardInfo from '../../../components/CardInfo'
import { Cat } from '../../../models/Cat'

interface CardInfoModalProps {
  currentCat: Cat | null
  onClose: () => void
}

const CardInfoModal: React.FC<CardInfoModalProps> = ({
  currentCat,
  onClose
}) => (
  <dialog open>
    <div className="fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center overflow-auto md:flex md:bg-black md:bg-opacity-50">
      <div className="w-full md:max-w-7xl">
        {currentCat && <CardInfo cat={currentCat} onCloseClicked={onClose} />}
      </div>
    </div>
  </dialog>
)

export default CardInfoModal
