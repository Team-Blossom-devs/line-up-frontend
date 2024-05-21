import { ActiveStatus, Status } from "./ActiveStatus"

interface RowProps {
  id: string
  name: string;
  count: string;
  phone: string;
  time: string;
  status: Status;
  handleRestoration: (id: string) => void;
  handleEnetrance: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const Row = ({ id, name, count, phone, time, status, handleRestoration, handleEnetrance, handleDelete }: RowProps) => {
  return (
    <tr className="text-sm whitespace-nowrap w-full border-y-2">
      <td className="py-8">
        <p>{name}</p>
        <p>{count}명</p>
      </td>
      <td>{phone}</td>
      <td>{time ? (Math.floor((new Date().getTime() - new Date(time).getTime()) / (1000 * 60))) + "분" : ""}</td>
      <td onClick={() => {
        if (status == 'PENDING') {
          handleRestoration(id);
        }
        else if (status == 'WAITING') {
          handleEnetrance(id);
        }
      }}>
        <ActiveStatus status={status} />
      </td>
      <td>
        <button onClick={() => {
          handleDelete(id);
        }}>삭제</button>
      </td>
    </tr>
  )
}
