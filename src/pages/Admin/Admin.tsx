import { getWaitingList } from "@/api/manager/getWaitingList"
import { patchRestoration } from "@/api/manager/patchRestoration"
import { Row } from "@/components/AdminRow/Row"
import { Logo } from "@/components/Logo/Logo"
import { Title } from "@/components/Waiting/WaitingComponent"
import { TableType } from "@/types/Table.type"
import { useEffect, useRef, useState } from "react"
import { getOrganDetail } from "@/api/organization/getOrganDetail"
import { useNavigate } from "react-router-dom"
import { Organization } from "@/types/Organization.type"
import { deleteWaiting } from "@/api/line/deleteWaiting"
import { patchEntrance } from "@/api/manager/patchEntrance"
import { Button } from "@/components/Button/Button"
import { RxHamburgerMenu } from "react-icons/rx"
import { HamburgerModal } from "@/components/Modal/HamburgerModal"

export const Admin = () => {

  const cursor = useRef<string>("");
  const navigate = useNavigate();
  const [waitingList, setWaitingList] = useState<TableType[]>([]);
  const [organization, setOrganization] = useState<Organization>();
  const [openModal, setOpenModal] = useState(false);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {

    if (localStorage.getItem('role') !== 'MANAGER') {
      navigate('/', { replace: true });
    }

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

  useEffect(() => {
    if (organization && waitingList) { setTableCount(organization.tableCount - waitingList.filter((it) => it.entranceStatus !== "WAITING").length); }
  }, [waitingList, organization])

  const handleRestoration = async (id: string) => {
    const response = await patchRestoration(id);
    setWaitingList(waitingList.map((it) => it.id == response.data.id ? response.data : it))
  }

  const handleEnetrance = async (id: string) => {
    const response = await patchEntrance(id);
    setWaitingList(waitingList.map((it) => it.id == response.data.id ? response.data : it))
  }

  const handleDelete = async (id: string) => {
    await deleteWaiting(id);
    setWaitingList(waitingList.filter((it) => it.id != id));
  }

  return (
    <div className="my-5 md:my-10 px-5 items-center">
      <div className="flex flex-1 justify-end">
        <Button
          color="toggle"
          onClick={() => {
            setOpenModal(true)
          }}
        >
          <RxHamburgerMenu size={22} />
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Logo />
        <Title title="관리자 페이지" className="text-btn-pink" />
        <Title title={`${organization ? organization.name : ""} 주점 현황표`} className="text-xl my-10" />
        <div className="w-full flex text-sm justify-between font-bold whitespace-nowrap">
          <p>총 대기 중인 팀 수: {waitingList.length}팀</p>
          <p>가용 테이블 현황: {tableCount} / {organization?.tableCount}</p>
        </div>
        <table className="w-full text-center">
          <thead>
            <tr className="text-sm">
              <td className="w-2/10 py-5 whitespace-nowrap">이름</td>
              <td className="w-3/10 whitespace-nowrap">전화번호</td>
              <td className="w-3/10 whitespace-nowrap">이용 시간</td>
              <td className="w-1/10 whitespace-nowrap">입장 상태</td>
              <td className="w-1/10 whitespace-nowrap"></td>
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
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
      {openModal && <HamburgerModal onClose={() => setOpenModal(false)} />}
    </div>
  )
}
