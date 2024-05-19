import { getWaitingList } from "@/api/manager/getWaitingList"
import { patchEnetrance } from "@/api/manager/patchEnetrance"
import { patchRestoration } from "@/api/manager/patchRestoration"
import { Row } from "@/components/AdminRow/Row"
import { Logo } from "@/components/Logo/Logo"
import { Title } from "@/components/Waiting/WaitingComponent"
import { TableType } from "@/types/Table.type"
import { useContext, useEffect, useRef, useState } from "react"
import { ContextType } from "./AdminFunnel"
import { getOrganDetail } from "@/api/organization/getOrganDetail"
// import { useNavigate } from "react-router-dom"
import { Organization } from "@/types/Organization.type"

export const Admin = ({ roleContext }: { roleContext: React.Context<ContextType | null> }) => {

  const cursor = useRef<string>("");
  const { role, organId } = useContext(roleContext)!;
  // 아직 로그인 시 받는 데이터 반영이 안 돼서 좀따가 할 것
  // const navigate = useNavigate();
  const [waitingList, setWaitingList] = useState<TableType[]>([]);
  const [organization, setOrganization] = useState<Organization>();

  useEffect(() => {

    console.log(role, organId);
    // if (role !== 'MANAGER') {
    //   navigate('/', { replace: true });
    // }

    const get = async () => {
      const response = await getWaitingList(10, cursor.current);
      cursor.current = response.data.cursorId;

      const organInfo = await getOrganDetail('1');
      setOrganization(organInfo.data);
      setWaitingList([...waitingList, ...response.data.waitingDetails])
    }
    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRestoration = async (id: string) => {
    const response = await patchRestoration(id);
    setWaitingList(waitingList.map((it) => it.id == response.data.id ? response.data : it))
  }

  const handleEnetrance = async (id: string) => {
    const response = await patchEnetrance(id);
    setWaitingList(waitingList.map((it) => it.id == response.data.id ? response.data : it))
  }

  return (
    <div className="flex flex-col items-center">
      <Logo />
      <Title title="관리자 페이지" className="text-btn-pink" />
      <Title title={`${organization ? organization.name : ""} 주점 현황표`} className="text-xl my-10" />
      <div className="w-11/12 flex text-sm justify-between font-bold whitespace-nowrap">
        <p>총 대기 중인 팀 수: {waitingList.length}팀</p>
        <p>가용 테이블 현황: {organization ? organization.tableCount : 0 - waitingList.filter((it) => it.entranceStatus === "COMPLETE").length} / {organization?.tableCount}</p>
      </div>
      <table className="w-11/12 text-center">
        <thead>
          <tr className="text-sm">
            <td className="w-2/10 py-5 whitespace-nowrap">이름</td>
            <td className="w-3/10 whitespace-nowrap">전화번호</td>
            <td className="w-3/10 whitespace-nowrap">이용 시간</td>
            <td className="w-1/10 whitespace-nowrap">입장 상태</td>
            <td className="w-1/10 whitespace-nowrap">삭제</td>
          </tr>
        </thead>
        <tbody>
          {waitingList.map((it) => (
            <Row
              id={it.id}
              key={it.id}
              name={it.name}
              count={it.headCount}
              phone={it.phoneNumber}
              time={it.entranceTime}
              status={it.entranceStatus}
              handleRestoration={handleRestoration}
              handleEnetrance={handleEnetrance}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
