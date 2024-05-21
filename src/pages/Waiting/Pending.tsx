
import { deleteWaiting } from "@/api/line/deleteWaiting";
import { Button } from "@/components/Button/Button"
import { Block, Description } from "@/components/Waiting/WaitingComponent"
import { useEffect } from "react";

interface PendingProps {
  id: string;
  imgUrl: string;
  time: number;
}

const Pending = ({ id, imgUrl, time }: PendingProps) => {

  useEffect(() => {
    if (imgUrl === "no-image") {
      window.alert('유효 시간이 지났습니다. 다시 대기해주세요.');
    }
  }, [imgUrl])

  return (
    <>
      <Block className="flex items-start my-5 justify-center">
        <img src={imgUrl} alt="유효 시간이 지났습니다. 다시 대기해주세요." className="max-h-96" />
      </Block>
      <Block className="">
        <Description description={`${time}분 안에 입장 완료 해주세요.`} />
        <div className="flex justify-end">
          <Button onClick={() => {
            if (window.confirm('대기 취소하시겠습니까?')) {
              deleteWaiting(id);
              window.location.reload();
            }
          }} color="red" className="text-white text-sm px-3 py-1">대기 취소</Button>
        </div>
      </Block>
    </>
  )
}

export default Pending