import axios from "axios"

interface GetWaitingReturnType {
  waitingStatus: "PENDING" | "WAITING" | "NOT-WAITING",
  time: number
  currentWaitingNumber?: number,
  headCount?: number,
  qrUrl?: string
}

export const getWaiting = async (id: string) => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/waiting/${id}`);
  const returnValue: GetWaitingReturnType = {
    waitingStatus: "PENDING",
    time: 0,
  }

  // 대기 현황 조회 - 대기 상태
  if (response && response.data.data.waitingStatus == "WAITING") {
    returnValue.waitingStatus = "WAITING";
    returnValue.time = response.data.data.currentWaitingTime;
    returnValue.headCount = response.data.data.headCount;
    returnValue.currentWaitingNumber = response.data.data.currentWaitingNumber;
  }

  // 대기 현황 조회 - 입장 중
  // QR요청 보내서 따로 받아와야함
  else if (response && response.data.data.waitingStatus == "PENDING") {
    const qrResponse = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/waiting/qr/${id}`);
    returnValue.waitingStatus = "PENDING";
    returnValue.time = response.data.data.remainMinutes;
    returnValue.qrUrl = qrResponse.data;
  }

  // 대기 현황 조회 - 안 기다림
  else if (response && response.data.data.waitingStatus == "NOT-WAITING") {
    returnValue.waitingStatus = "NOT-WAITING";
    returnValue.currentWaitingNumber = response.data.data.currentWaitingNumber;
    returnValue.time = response.data.data.expectingWaitingTime;
  }

  return returnValue;
}