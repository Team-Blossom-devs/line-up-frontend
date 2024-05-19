import axios from 'axios'

export const getSearch = async (searchTerm: string, pageNum: number) => {
  const accessToken = localStorage.getItem('token')

  const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/organization`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      searchTerm,
      pageNum,
    },
  })

  return response.data
}
