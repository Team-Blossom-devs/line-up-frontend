import React from 'react'

type Color = 'pink' | 'kakao' | 'toggle' | 'red'

type ButtonProps = {
  onClick?: () => void
  route?: string
  color: Color
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  icon?: string
}

export const Button = ({ onClick, color, type = 'button', className, children, icon }: ButtonProps) => {
  let combinedClassName = ''

  switch (color) {
    case 'pink': {
      combinedClassName = 'w-full p-3 bg-btn-pink rounded-lg font-bold cursor-pointer'
      break
    }
    case 'kakao': {
      combinedClassName = 'w-full p-2 bg-btn-yellow rounded-lg font-bold cursor-pointer mt-12'
      break
    }
    case 'toggle': {
      combinedClassName = 'shadow-lg rounded-lg p-3 md:p-5 text-icon-color cursor-pointer'
      break
    }
    case 'red': {
      combinedClassName = 'bg-btn-red rounded-lg font-bold cursor-pointer'
      break
    }
  }
  return (
    <button type={type} className={`${combinedClassName} ${className}`} onClick={onClick}>
      {icon && <img src={icon} alt="" />}
      {children}
    </button>
  )
}
