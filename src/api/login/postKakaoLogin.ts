import axios from 'axios'

export const postKakaoLogin = async () => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/oauth2/authorization/kakao`)
  return response.data
}
