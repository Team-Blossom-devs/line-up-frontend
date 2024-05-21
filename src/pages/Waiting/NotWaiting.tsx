
import { postWaiting } from "@/api/line/postWaiting";
import { Button } from "@/components/Button/Button";
import { Block, Description } from "@/components/Waiting/WaitingComponent"
import React, { useState } from 'react'
import { FaRegClock } from "react-icons/fa";
import { MdPlace, MdSportsBar } from "react-icons/md";

interface NotWaitingProps {
  id: string;
  imgUrl: string;
  description: string;
  currentWaitingNumber: number;
  time: number;
  location: string;
  table: number;
  openTime: string;
  closeTime: string;
  onNext: () => void;
}

const NotWaiting = ({ id, imgUrl, description, currentWaitingNumber, location, time, table, openTime, closeTime, onNext }: NotWaitingProps) => {

  const [headCount, setHeadCount] = useState(0);

  const checkTime = () => {
    const currentTime = new Date();
    const currentTotalMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();


    const [openHours, openMinutes] = openTime.split(':').map(Number);
    const openTotalMinutes = openHours * 60 + openMinutes;

    const [closeHours, closeMinutes] = closeTime.split(':').map(Number);
    const closeTotalMinutes = closeHours * 60 + closeMinutes;

    if (openTotalMinutes < closeTotalMinutes) {
      return currentTotalMinutes >= openTotalMinutes && currentTotalMinutes <= closeTotalMinutes;
    } else {
      return currentTotalMinutes >= openTotalMinutes || currentTotalMinutes <= closeTotalMinutes;
    }
  }

  return (
    <>
      <Block className="flex flex-col my-5 p-5 justify-center">
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
        <Description description={`예상 대기시간 약 ${time > 60 ? (Math.floor(time / 60) + "시간") : ""} ${time % 60}분`} />
        <input
          type="number"
          value={headCount}
          onChange={(e) => setHeadCount(parseInt(e.target.value))}
          className="border-2 border-gray-400 rounded-xl mb-5 w-16 mr-2 text-center"
        />명
        <Button onClick={() => {
          if (checkTime()) {
            postWaiting(id, headCount)
            onNext()
          } else {
            window.alert(`오픈 시간은 ${openTime}}부터 ${closeTime}까지입니다.`)
          }
        }} color="pink" className="w-full text-white font-bold">줄서기</Button>
      </Block>
    </>
  )
}

export default NotWaiting