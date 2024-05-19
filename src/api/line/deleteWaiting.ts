import axios from "axios"

export const deleteWaiting = async (id: string) => {
  const response = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/waiting/${id}`, {
    headers: {
      'Authorization': `${localStorage.getItem('token')}`,
    },
  });
  return response.data;
}