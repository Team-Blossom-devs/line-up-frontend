import axios from 'axios'

export const postSignIn = async (managerName: string, password: string) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/manager`, {
    managerName: managerName,
    password: password,
  })
  return response.data
}
