import { Row } from "@/components/AdminRow/Row"
import { Logo } from "@/components/Logo/Logo"
import { Title } from "@/components/Waiting/WaitingComponent"

export const Admin = () => {
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
          </tr>
        </thead>
        <tbody>
          <Row id="1" name="userName" count={10} time="1시간 20분" phone="010-1234-5678" status="enter" />
          <Row id="1" name="userName" count={10} time="1시간 20분" phone="010-1234-5678" status="ready" />
          <Row id="1" name="userName" count={10} time="1시간 20분" phone="010-1234-5678" status="ing" />
        </tbody>
      </table>
    </div>
  )
}
