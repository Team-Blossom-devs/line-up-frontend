import { Logo } from "@/components/Logo/Logo"
import qr from "@/assets/images/qr.jpg"
import menu from "@/assets/images/주점_메뉴.jpg";
import { Title, Block, Description } from "@/components/Queue/QueueComponent"
import Button from "@/components/Button/Button";
import { useState } from "react";

export const Queue = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isWaiting, setIsWaiting] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [available, setAvailable] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <Logo />
      <Title title="title" className="text-left" />
      <Block className="flex items-start my-5 justify-center">
        {
          isWaiting && available ?
            <img src={qr} className="max-h-96" />
            :
            <>
              <img src={menu} className="max-w-48 mr-3" />
              <Block>
                test123
              </Block>
            </>
        }
      </Block>
      {
        isWaiting ?
          <Block className="">
            <Description description="대기 팀 6팀" />
            <Description description={`입장까지 1시간 40분 남았습니다.`} />
            {available && <Description description="서둘러 입장해주세요!" />}
            <Description description="대기 인원 6명" />
            <div className="flex justify-end">
              <Button onClick={() => { }} color="red" className="text-white text-sm px-3 py-1">대기 취소</Button>
            </div>
          </Block>
          :
          <Block>
            <Description description="대기팀 6팀" />
            <Description description="입장까지 1시간 40분 남았습니다" />
            <input type="number" className="border-2 border-gray-400 rounded-xl mb-5 w-16 mr-2" />명
            <Button onClick={() => { }} color="pink" className="w-full text-white font-bold">줄서기</Button>
          </Block>}
    </div>
  )
}
