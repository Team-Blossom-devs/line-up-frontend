import React from 'react';

export const Title = ({ title, className = "" }: { title: string; className?: string; }) => {
  return <div className={`text-3xl font-extrabold whitespace-nowrap ${className}`}>{title}</div>
}

interface DescriptionProps extends React.PropsWithChildren {
  className?: string
}

export const Description = ({ description }: { description: string }) => {
  return (
    <div className="font-bold mb-3 whitespace-nowrap">
      {description}
    </div>
  )
}

export const Block = ({ children, className = "" }: DescriptionProps) => {
  return (
    <div className={`w-4/5 border-2 p-3 border-gray-400 rounded-xl ${className}`}>
      {children}
    </div>
  )
}