import React from 'react'

type Color = 'pink' | 'kakao'

type ButtonProps = {
  onClick: () => void
  route?: string
  color: Color
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
}

const Button = ({ onClick, color, type = 'button', className, children }: ButtonProps) => {
  let combinedClassName = ''

  switch (color) {
    case 'pink': {
      combinedClassName = 'w-72 h-11 bg-btn-pink rounded-lg font-bold cursor-pointer'
      break
    }
    case 'kakao': {
      combinedClassName = 'w-72 h-11 bg-btn-yellow rounded-lg font-bold cursor-pointer'
      break
    }
  }
  return (
    <button type={type} className={`${combinedClassName} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
