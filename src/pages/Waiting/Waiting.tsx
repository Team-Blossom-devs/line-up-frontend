
import { deleteWaiting } from "@/api/line/deleteWaiting";
import { Button } from "@/components/Button/Button";

import { Block, Description } from "@/components/Waiting/WaitingComponent"
import { FaRegClock } from "react-icons/fa";
import { MdPlace, MdSportsBar } from "react-icons/md";

interface WaitingProps {
  id: string;
  imgUrl: string;
  description: string;
  currentWaitingNumber: number;
  time: number;
  headCount: number;
  location: string;
  table: number;
  openTime: string;
  closeTime: string;
  onCancel: () => void;
}

const Waiting = ({ id, imgUrl, description, currentWaitingNumber, time, location, table, openTime, closeTime, headCount, onCancel }: WaitingProps) => {
  return (
    <>
      <Block className="flex flex-col my-5 justify-center">
        <div className="flex justify-center w-full"><img src={imgUrl} /></div>
        <div className="flex flex-col text-icon-color gap-2 my-5">
          <div className="flex flex-row gap-2">
            <MdPlace size={23} />
            {location}
          </div>
          <div className="flex flex-row gap-2">
            <FaRegClock size={20} />
            {`${openTime} - ${closeTime}`}
          </div>
          <div className="flex flex-row gap-2">
            <MdSportsBar size={20} /> {table} 테이블
          </div>

          <p className="mx-5">{description}</p>
        </div>
      </Block>
      <Block>
        <Description description={`대기팀 ${currentWaitingNumber}팀`} />
        <Description description={`입장까지 약 ${time > 60 ? (Math.floor(time / 60) + "시간") : ""} ${time % 60}분 남았습니다.`} />
        <Description description={`대기 인원 ${headCount}명`} />
        <div className="flex justify-end">
          <Button onClick={() => {
            if (window.confirm('대기 취소하시겠습니까?')) {
              deleteWaiting(id)
              onCancel();
            }
          }} color="red" className="text-white text-sm px-3 py-1">대기 취소</Button>
        </div>
      </Block>
    </>
  )
}

export default Waiting