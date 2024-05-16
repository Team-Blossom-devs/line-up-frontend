import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '@/components/Logo/Logo'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { postSignUp } from '@/api/login/postSignUp'

export const Signup = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await postSignUp(userName, phoneNumber)
      console.log(response)
      window.alert('회원가입이 완료되었습니다.')
      navigate('/viewAll')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className="container mt-20 items-center">
        <Logo />
        <div className="my-5 font-bold text-2xl md:text-3xl">회원가입</div>
        <div className="text-input-text">
          LINE UP은 축제 종료 후 <br />
          모든 개인정보를 폐기함을 알려드립니다.
        </div>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="userName" className="label">
            <div className="w-16 text-left">이름</div>
            <Input
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="성함을 입력해주세요"
            />
          </label>
          <label htmlFor="phoneNumber" className="label">
            <div className="w-16 text-left">연락처</div>
            <Input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="연락 받으실 연락처를 입력해주세요"
            />
          </label>
          <Button color="pink" type="submit" children="회원가입" />
        </form>
      </div>
    </>
  )
}
