import axios from "axios"

export const getWaitingList = async (size: number, cursor: string) => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/manager/waitings`, {
    params: {
      size: size,
      cursor: cursor
    }
  })

  return response.data;
}
