import axios from "axios"

export const deleteWaiting = async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/waiting/${id}`);
  return response.data;
}