import axios from 'axios'

export const postSignUp = async (userName: string, phoneNumber: string) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/oauth/sign-up`, {
    userName: userName,
    phoneNumber: phoneNumber,
  })
  return response.data
}
