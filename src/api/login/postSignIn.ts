import axios from 'axios'

export const postSignIn = async (managerName: string, password: string) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/sign-in/manager`, {
    managerName: managerName,
    password: password,
    // headers: {
    //   'Authorization': `Bearer ${accessToken}`,
    // },
  })
  return response.data
}
