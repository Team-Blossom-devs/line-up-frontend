import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '@/components/Logo/Logo'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { postSignUp } from '@/api/login/postSignUp'

export const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ userName: '', phoneNumber: '' })
  const [errors, setErrors] = useState({ userName: '', phoneNumber: '' })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if (token) {
      localStorage.setItem('token', token)
      console.log(token)
    } else {
      console.log('토큰 없음')
    }
  }, [])

  const validateInput = (name: string, value: string) => {
    let errorMessage = ''
    if (name === 'phoneNumber') {
      const phoneRegex = /^\d{11}$/
      if (!phoneRegex.test(value)) {
        errorMessage = '11자리 숫자로 입력해주세요. (ex. 01012345678)'
      }
    } else if (name === 'userName') {
      const nameRegex = /^[a-zA-Z가-힣]+$/
      if (!nameRegex.test(value)) {
        errorMessage = '이름은 한글 또는 영어로 입력해주세요.'
      }
    }
    return errorMessage
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validateInput(name, value) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const userNameError = validateInput('userName', formData.userName)
    const phoneNumberError = validateInput('phoneNumber', formData.phoneNumber)

    if (!userNameError && !phoneNumberError) {
      try {
        const response = await postSignUp(formData.userName, formData.phoneNumber)
        console.log(response)
        localStorage.setItem('userName', formData.userName)
        localStorage.setItem('phoneNumber', formData.phoneNumber)
        window.alert('회원가입이 완료되었습니다.')
        navigate('/viewAll')
      } catch (err) {
        console.log(err)
      }
    } else {
      setErrors({ userName: userNameError, phoneNumber: phoneNumberError })
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
          <InputField
            label="이름"
            name="userName"
            value={formData.userName}
            error={errors.userName}
            onChange={handleChange}
            placeholder="성함을 입력해주세요"
          />
          <InputField
            label="연락처"
            name="phoneNumber"
            value={formData.phoneNumber}
            error={errors.phoneNumber}
            onChange={handleChange}
            placeholder="연락 받으실 연락처를 입력해주세요"
          />
          <Button color="pink" type="submit">
            회원가입
          </Button>
        </form>
      </div>
    </>
  )
}

interface InputFieldProps {
  label: string
  name: string
  value: string
  error: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, error, onChange, placeholder }) => (
  <label htmlFor={name} className="label">
    <div className="flex flex-row justify-center items-center">
      <div className="w-16 text-left">{label}</div>
      <Input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
    {error && <div className="flex mt-3 pl-14 text-xs text-valid-text">{error}</div>}
  </label>
)
