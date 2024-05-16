import axios from "axios"

export const getOrganDetail = async (id: string) => {

  const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/organization/${id}`, {
    // headers: {
    //   'Authorization': `Bearer ${accessToken}`,
    // },
  });

  return response.data;

}