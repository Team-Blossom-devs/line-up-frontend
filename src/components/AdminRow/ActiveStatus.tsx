export type Status = "enter" | "ready" | "ing"

interface ActiveStatusProps {
  status: Status;
  className?: string
}

const statusButton = {
  enter: "입장완료",
  ready: "입장처리",
  ing: "입장중"
}

export const ActiveStatus = ({ status, className = "" }: ActiveStatusProps) => {

  let combinedClassName = "text-white font-bold px-3 py-1 rounded-xl";

  switch (status) {
    case "enter": {
      console.log(status);
      combinedClassName += " bg-[#32936F]";
      break;
    }
    case "ready": { //입장처리
      combinedClassName += " bg-[#F57E77]";
      break;
    }
    case "ing": {
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
