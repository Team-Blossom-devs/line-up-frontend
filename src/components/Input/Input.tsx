import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      className={`w-full border-solid border p-2 md:p-3 rounded-md placeholder:text-input-text placeholder:text-sm ${className}`}
      {...props}
    />
  )
}
