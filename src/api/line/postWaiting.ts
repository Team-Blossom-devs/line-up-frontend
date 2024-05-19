import axios from "axios"

export const postWaiting = async (id: string, headCount: number) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/waiting`, {
    organizationId: id,
    headCount: headCount
  }, {
    headers: {
      'Authorization': `${localStorage.getItem('token')}`,
    },
  });
  return response.data;
}