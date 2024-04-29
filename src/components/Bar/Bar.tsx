import { MdPlace } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import Container from '@/assets/images/wna.jpeg'

interface propsType {
  name: string
  location: string
  time: string
}

function Bar({ name, location, time }: propsType) {
  return (
    <>
      <div className="flex flex-col w-full">
        <img src={Container} className="rounded-xl" />
        <div className="flex flex-col my-5 gap-2 text-icon-color">
          <div className="text-black font-bold">{name}</div>
          <div className="flex flex-row gap-2">
            <MdPlace size={23} />
            {location}
          </div>
          <div className="flex flex-row gap-2">
            <FaRegClock size={20} />
            {time}
          </div>
        </div>
      </div>
    </>
  )
}
export default Bar
