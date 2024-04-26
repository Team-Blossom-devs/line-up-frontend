import { MdPlace } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import Container from '@/assets/images/wna.jpeg'

function Bar() {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <img src={Container} />
        </div>
        <div className="flex flex-col my-5 gap-2 text-icon-color">
          <MdPlace size={23} />
          <FaRegClock size={20} />
        </div>
      </div>
    </>
  )
}
export default Bar
