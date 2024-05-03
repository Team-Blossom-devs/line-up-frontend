import { InputHTMLAttributes } from 'react'
import kakaoLogin from '@/assets/images/kakao_logo.svg'
import { useNavigate } from 'react-router-dom'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      className={`border-solid border p-2 md:p-3 rounded-md placeholder:text-input-text placeholder:text-sm ${className}`}
      {...props}
    />
  )
}

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

export const LoginForm = () => {
  return (
    <>
      <div className="w-4/5 md:w-full flex flex-col gap-6 my-5">
        <label htmlFor="id" className="flex flex-col gap-1 text-typo-content">
          아이디
          <Input type="text" name="id" placeholder="아이디를 입력해주세요" />
        </label>
        <label htmlFor="password" className="flex flex-col gap-1 text-typo-content">
          비밀번호
          <Input type="password" name="password" placeholder="비밀번호를 입력해주세요" />
        </label>
      </div>
    </>
  )
}
