import axios from 'axios'

export const postKakaoLogin = async (code: string | null) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/oauth/sign-in/kakao`, {
    // headers: {
    //   'Authorization': `Bearer ${accessToken}`,
    // },
    code,
  })
  return response.data
}
