import axios from 'axios'

export const getOrganList = async (searchTerm: string, pageNum: number) => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/organization`, {
    // headers: {
    //   'Authorization': `Bearer ${accessToken}`,
    // },
    params: {
      name: searchTerm,
      pageNum: pageNum,
    },
  })

  return response.data
}
