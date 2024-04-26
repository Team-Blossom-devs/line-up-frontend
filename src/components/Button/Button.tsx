import React from 'react'

type Color = 'pink' | 'kakao' | 'toggle' | 'red'

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
    case 'toggle': {
      combinedClassName = 'shadow-lg rounded-lg p-3 md:p-5 text-icon-color cursor-pointer'
      break
    }
    case 'red': {
      combinedClassName = "bg-btn-red rounded-lg font-bold cursor-pointer"
      break;
    }
  }
  return (
    <button type={type} className={`${combinedClassName} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
