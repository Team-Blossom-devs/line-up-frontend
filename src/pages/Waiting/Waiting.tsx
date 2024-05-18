
import { deleteWaiting } from "@/api/line/deleteWaiting";
import { Button } from "@/components/Button/Button";

import { Block, Description } from "@/components/Waiting/WaitingComponent"

interface WaitingProps {
  id: string;
  imgUrl: string;
  description: string;
  currentWaitingNumber: number;
  time: number;
  headCount: number;
  onCancel: () => void;
}

const Waiting = ({ id, imgUrl, description, currentWaitingNumber, time, headCount, onCancel }: WaitingProps) => {
  return (
    <>
      <Block className="flex flex-col my-5 justify-center">
        <div className="flex justify-center w-full"><img src={imgUrl} className="max-w-48 mr-3" /></div>
        <p className="mx-5">{description}</p>
      </Block>
      <Block>
        <Description description={`대기팀 ${currentWaitingNumber}팀`} />
        <Description description={`입장까지 약 ${Math.floor(time / 60)}시간 ${time % 60}분 남았습니다.`} />
        <Description description={`대기 인원 ${headCount}명`} />
        <div className="flex justify-end">
          <Button onClick={() => {
            deleteWaiting(id)
            onCancel();
          }} color="red" className="text-white text-sm px-3 py-1">대기 취소</Button>
        </div>
      </Block>
    </>
  )
}

export default Waiting