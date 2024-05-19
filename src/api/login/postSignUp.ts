import axios from 'axios'

export const postSignUp = async (userName: string, phoneNumber: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/oauth/sign-up`,
    {
      userName: userName,
      phoneNumber: phoneNumber,
    },
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      withCredentials: true,
    }
  )
  return response
}
