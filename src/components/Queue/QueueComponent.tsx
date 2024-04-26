import React from 'react';

export const Title = ({ title }: { title: string }) => {
  return <div className="text-3xl font-extrabold">{title}</div>
}

interface DescriptionProps extends React.PropsWithChildren {
  className?: string
}

export const Description = ({ description }: { description: string }) => {
  return (
    <div className="font-bold mb-3">
      {description}
    </div>
  )
}

export const Block = ({ children, className = "" }: DescriptionProps) => {
  return (
    <div className={`w-full border-2 p-5 border-gray-400 rounded-xl ${className}`}>
      {children}
    </div>
  )
}