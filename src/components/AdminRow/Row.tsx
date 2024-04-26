import { ActiveStatus, Status } from "./ActiveStatus"

interface RowProps {
  id: string;
  name: string;
  count: number;
  phone: string;
  time: string;
  status: Status;
}

export const Row = ({ id, name, count, phone, time, status }: RowProps) => {
  return (
    <tr className="text-xl border-y-2">
      <td className="py-8">{name}</td>
      <td>{count}</td>
      <td>{phone}</td>
      <td>{time}</td>
      <td>
        <ActiveStatus status={status} key={id} />
      </td>
    </tr>
  )
}
