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
}

export const Row = ({ id, name, count, phone, time, status, handleRestoration, handleEnetrance }: RowProps) => {
  return (
    <tr className="text-sm whitespace-nowrap w-full border-y-2">
      <td className="py-8">
        <p>{name}</p>
        <p>{count}</p>
      </td>
      <td>{phone}</td>
      <td>{time ? (new Date(time).toLocaleTimeString()) : ""}</td>
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
        <button>삭제</button>
      </td>
    </tr>
  )
}
