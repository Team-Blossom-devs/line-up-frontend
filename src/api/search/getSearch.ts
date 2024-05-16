import axios from 'axios'

export const getSearch = async (searchTerm: string, pageNum: number) => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/organization/`, {
    params: {
      searchTerm,
      pageNum,
    },
  })

  return response.data
}
