import kakaoLogin from '@/assets/images/kakao_logo.svg'
import { useNavigate } from 'react-router-dom'

export const KakaoLogin = () => {
  const navigate = useNavigate()
  //   const REST_API_KEY = ''
  //   const REDIRECT_URI = ''
  //   const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const loginHandler = () => {
    // window.location.href = link
    navigate('/viewAll')
  }

  return (
    <>
      <button onClick={loginHandler} className="px-2 mt-12">
        <img src={kakaoLogin} />
      </button>
    </>
  )
}