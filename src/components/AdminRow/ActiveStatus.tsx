export type Status = "PENDING" | "WAITING" | "COMPLETE"

interface ActiveStatusProps {
  status: Status;
  className?: string
}

const statusButton = {
  COMPLETE: "입장완료",
  WAITING: "대기중",
  PENDING: "입장중"
}

export const ActiveStatus = ({ status, className = "" }: ActiveStatusProps) => {

  let combinedClassName = "text-white font-bold px-3 py-1 rounded-xl";

  switch (status) {
    case "COMPLETE": {
      combinedClassName += " bg-[#32936F]";
      break;
    }
    case "WAITING": { //입장처리
      combinedClassName += " bg-[#F57E77]";
      break;
    }
    case "PENDING": {
      combinedClassName += " bg-[#FFD700]";
      break;
    }
  }

  return (
    <button className={`${combinedClassName} ${className}`}>
      {statusButton[status]}
    </button>
  )
}
