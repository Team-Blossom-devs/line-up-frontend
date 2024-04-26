import { Row } from "@/components/AdminRow/Row"
import { Logo } from "@/components/Logo/Logo"
import { Title } from "@/components/Queue/QueueComponent"

export const Admin = () => {
  return (
    <div className="p-20">
      <Logo />
      <Title title="관리자 페이지" className="text-center text-btn-pink my-10" />
      <Title title="컴공 ㅇㅇㅇ 주점 현황표" className="my-10" />
      <div className="flex justify-between font-bold">
        <p>총 대기 중인 팀 수: {20}팀</p>
        <p>가용 테이블 현황: {3}</p>
      </div>
      <table className="w-full text-center">
        <thead>
          <tr>
            <td className="w-32 py-5">이름</td>
            <td className="w-32">인원</td>
            <td className="w-32">전화번호</td>
            <td className="w-32">이용 시간</td>
            <td className="w-32">입장 상태</td>
          </tr>
        </thead>
        <tbody>
          <Row id="1" name="userName" count={10} time="1시간 20분" phone="123456" status="enter" />
          <Row id="1" name="userName" count={10} time="1시간 20분" phone="123456" status="ready" />
          <Row id="1" name="userName" count={10} time="1시간 20분" phone="123456" status="ing" />
        </tbody>
      </table>
    </div>
  )
}
