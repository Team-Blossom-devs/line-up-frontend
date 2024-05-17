import { ActiveStatus, Status } from "./ActiveStatus"

interface RowProps {
  name: string;
  count: string;
  phone: string;
  time: string;
  status: Status;
}

export const Row = ({ name, count, phone, time, status }: RowProps) => {
  return (
    <tr className="text-sm whitespace-nowrap w-full border-y-2">
      <td className="py-8">{name}</td>
      <td>{count}</td>
      <td>{phone}</td>
      <td>{time ? (new Date(time).toLocaleTimeString()) : ""}</td>
      <td>
        <ActiveStatus status={status} />
      </td>
      <td>
        <button>삭제</button>
      </td>
    </tr>
  )
}
