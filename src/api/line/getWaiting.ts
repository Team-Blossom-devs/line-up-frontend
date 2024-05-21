import { WaitingType } from "@/types/Waiting.type";
import axios from "axios"

export const getWaiting = async (id: string) => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/waiting/${id}`, {
    headers: {
      'Authorization': `${localStorage.getItem('token')}`,
    },
  });
  const returnValue: WaitingType = {
    waitingStatus: "PENDING",
    time: 0,
  }

  // 대기 현황 조회 - 대기 상태
  if (response && response.data.data?.waitingStatus == "WAITING") {
    returnValue.waitingStatus = "WAITING";
    returnValue.waitingId = response.data.data.waitingId;
    returnValue.time = response.data.data.expectWaitingTime;
    returnValue.headCount = response.data.data.headCount;
    returnValue.currentWaitingNumber = response.data.data.currentWaitingNumber;
  }

  // 대기 현황 조회 - 입장 중
  // QR요청 보내서 따로 받아와야함
  else if (response && response.data.data?.waitingStatus == "PENDING") {
    await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/waiting/qr-code/${response.data.data.waitingId}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`,
      },
      responseType: 'blob',
    }).then((res) => {
      returnValue.qrUrl = URL.createObjectURL(res.data);
    })

    returnValue.waitingStatus = "PENDING";
    returnValue.waitingId = response.data.data.waitingId;
    returnValue.time = response.data.data.remainMinutes;
  }
  // 대기 현황 조회 - 안 기다림
  else if (response && response.data.data?.waitingStatus == "NOT-WAITING") {
    returnValue.waitingStatus = "NOT-WAITING";
    returnValue.currentWaitingNumber = response.data.data.currentWaitingNumber;
    returnValue.time = response.data.data.expectWaitingTime;
    // 10분 지남
  } else {
    console.log(response);
    if (response.data.code === "ORG-001") { returnValue.waitingStatus = "NOT-FOUND"; }
    else if (response.data.code == "WAT-302") { returnValue.waitingStatus = "DEPRECATED" }
    returnValue.qrUrl = response.data.message;
    returnValue.waitingId = response.data.message;
    returnValue.time = 0;
  }

  return returnValue;
}