
import { postWaiting } from "@/api/line/postWaiting";
import { Button } from "@/components/Button/Button";
import { Block, Description } from "@/components/Waiting/WaitingComponent"
import React, { useState } from 'react'

interface NotWaitingProps {
  id: string;
  imgUrl: string;
  description: string;
  currentWaitingNumber: number;
  time: number;
  onNext: () => void;
}

const NotWaiting = ({ id, imgUrl, description, currentWaitingNumber, time, onNext }: NotWaitingProps) => {

  const [headCount, setHeadCount] = useState(0);

  return (
    <>
      <Block className="flex flex-col my-5 justify-center">
        <div className="flex justify-center w-full"><img src={imgUrl} className="max-w-48 mr-3" /></div>
        <p className="mx-5">{description}</p>
      </Block>
      <Block>
        <Description description={`대기팀 ${currentWaitingNumber}팀`} />
        <Description description={`예상 대기시간 약 ${time > 60 ? (Math.floor(time / 60) + "시간") : ""} ${time % 60}분`} />
        <input
          type="number"
          value={headCount}
          onChange={(e) => setHeadCount(parseInt(e.target.value))}
          className="border-2 border-gray-400 rounded-xl mb-5 w-16 mr-2 text-center"
        />명
        <Button onClick={() => {
          postWaiting(id, headCount)
          onNext()
        }} color="pink" className="w-full text-white font-bold">줄서기</Button>
      </Block>
    </>
  )
}

export default NotWaiting