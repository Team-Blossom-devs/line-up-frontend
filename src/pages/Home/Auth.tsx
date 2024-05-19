import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if (token) {
      localStorage.setItem('token', token)
      console.log(token)
      navigate('/signup', { replace: true })
    }
  }, [navigate])

  return <></>
}
