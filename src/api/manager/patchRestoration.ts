import axios from "axios"

export const patchRestoration = async (id: string) => {

  const response = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/manager/restoration/${id}`, {
    headers: {
      'Authorization': `${localStorage.getItem('token')}`,
    },
  });
  return response.data;
}
