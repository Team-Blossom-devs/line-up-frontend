import { getWaitingList } from "@/api/manager/getWaitingList"
import { Row } from "@/components/AdminRow/Row"
import { Logo } from "@/components/Logo/Logo"
import { Title } from "@/components/Waiting/WaitingComponent"
import { TableType } from "@/types/Table.type"
import { useEffect, useRef, useState } from "react"

export const Admin = () => {

  const cursor = useRef<string>("");

  const [waitingList, setWaitingList] = useState<TableType[]>([]);

  useEffect(() => {
    const get = async () => {
      const response = await getWaitingList(2, cursor.current);
      cursor.current = response.data.cursorId;
      console.log(response.data.waitingDetails);
      setWaitingList([...waitingList, ...response.data.waitingDetails])
    }
    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col items-center">
      <Logo />
      <Title title="관리자 페이지" className="text-btn-pink" />
      <Title title="컴공 ㅇㅇㅇ 주점 현황표" className="text-xl my-10" />
      <div className="w-11/12 flex text-sm justify-between font-bold whitespace-nowrap">
        <p>총 대기 중인 팀 수: {20}팀</p>
        <p>가용 테이블 현황: {3}</p>
      </div>
      <table className="w-11/12 text-center">
        <thead>
          <tr className="text-sm">
            <td className="w-2/10 py-5 whitespace-nowrap">이름</td>
            <td className="w-1/10 whitespace-nowrap">인원</td>
            <td className="w-3/10 whitespace-nowrap">전화번호</td>
            <td className="w-3/10 whitespace-nowrap">이용 시간</td>
            <td className="w-1/10 whitespace-nowrap">입장 상태</td>
            <td className="w-1/10 whitespace-nowrap">삭제</td>
          </tr>
        </thead>
        <tbody>
          {waitingList.map((it) => (
            <Row
              key={it.id}
              name={it.name}
              count={it.headCount}
              phone={it.phoneNumber}
              time={it.entranceTime}
              status={it.entranceStatus} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
