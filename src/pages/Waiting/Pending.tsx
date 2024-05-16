
import { deleteWaiting } from "@/api/line/deleteWaiting";
import { Button } from "@/components/Button/Button"
import { Block, Description } from "@/components/Waiting/WaitingComponent"

interface PendingProps {
  id: string;
  imgUrl: string;
  time: number;
}

const Pending = ({ id, imgUrl, time }: PendingProps) => {
  return (
    <>
      <Block className="flex items-start my-5 justify-center">
        <img src={imgUrl} className="max-h-96" />
      </Block>
      <Block className="">
        <Description description={`${time}분 안에 입장완료해주세요.`} />
        <div className="flex justify-end">
          <Button onClick={() => { deleteWaiting(id) }} color="red" className="text-white text-sm px-3 py-1">대기 취소</Button>
        </div>
      </Block>
    </>
  )
}

export default Pending