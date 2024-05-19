import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { postSignIn } from '@/api/login/postSignIn'
import kakaoLogin from '@/assets/images/kakao_logo.svg'

export const KakaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const loginHandler = () => {
    window.location.href = KAKAO_URL
  }

  return (
    <>
      <div className="z-20 text-typo-content my-8 md:text-2xl">
        간편한 웨이팅 등록으로 <br /> 편리하게 주점을 이용해보세요!
        <Button onClick={loginHandler} color="kakao" icon={kakaoLogin} children="" />
      </div>
    </>
  )
}

export const LoginForm = () => {
  const navigate = useNavigate()
  const [managerName, setManagerName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const token = await postSignIn(managerName, password)

      if (token) {
        localStorage.setItem('token', token)
        window.alert('로그인이 완료되었습니다.')
        navigate('/admin')
      } else {
        console.error('로그인에 실패하셨습니다.')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="id" className="label">
          <div className="w-24 text-left">아이디</div>
          <Input
            type="text"
            name="managerName"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            placeholder="아이디를 입력해주세요"
          />
        </label>
        <label htmlFor="password" className="label">
          <div className="w-24 text-left">비밀번호</div>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
          />
        </label>
        <Button color="pink" type="submit" children="로그인" />
      </form>
    </>
  )
}
