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
  const [available, setAvailable] = useState(true);
  return (
    <div className="p-20">
      <Logo />
      <div>
        <Title title="title" />
        <Block className="flex items-start my-5 justify-center">
          {
            isWaiting && available ?
              <img src={qr} className="h-96" />
              :
              <>
                <img src={menu} className="mr-10 h-96" />
                <Block>
                  test123
                </Block>
              </>
          }
        </Block>
        {
          isWaiting ?
            <Block className="px-32">
              <Description description="대기팀 6팀" />
              <Description description={`입장까지 1시간 40분 남았습니다. ${available ? "서둘러 입장해주세요!" : ""}`} />
              <Description description="대기인원 6명" />
              <div className="flex justify-end px-10">
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
    </div>
  )
}
