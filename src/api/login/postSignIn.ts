import axios from 'axios'

export const postSignIn = async (managerName: string, password: string) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/sign-in/manager`, {
    managerName: managerName,
    password: password,
  })
  console.log(response);
  const token = response.headers['authorization']
  return [token, response.data]
}
