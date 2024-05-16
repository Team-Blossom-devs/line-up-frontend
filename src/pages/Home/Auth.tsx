import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { postKakaoLogin } from '@/api/login/postKakaoLogin'

export const Auth = () => {
  const navigate = useNavigate()
  const params = new URL(window.location.href).searchParams
  const code = params.get('code')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postKakaoLogin(code)
        console.log(response)
        navigate('/signup')
      } catch (error) {
        console.log(error)
      }
    }
    if (code) {
      fetchData()
    }
  }, [code, navigate])

  return <></>
}
