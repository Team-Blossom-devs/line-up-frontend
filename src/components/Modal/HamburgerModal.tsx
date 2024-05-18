import React from 'react'

type Props = {
  onClose: () => void
}

export const HamburgerModal = ({ onClose }: Props) => {
  const onClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  const user = { name: '테스터', email: 'tester@naver.com' }
  return (
    <>
      <div onClick={onClickBackground} className="fixed inset-0 bg-black bg-opacity-15 z-20">
        <div className="flex flex-col h-full w-1/2 lg:w-1/4 absolute bg-white z-50 inset-y-0 right-0 lg:right-1/4 shadow-lg px-5 md:px-10 py-16 ">
          <div className="font-bold pb-4">회원 정보</div>
          <div className="flex  md:flex-row flex-col py-2 md:gap-3">
            <div className="text-typo-content">이름</div>
            <div className="text-input-text">{user.name}</div>
          </div>
          <div className="flex md:flex-row flex-col py-2  md:gap-3">
            <div className="text-typo-content">이메일</div>
            <div className="text-input-text">{user.email}</div>
          </div>
        </div>
      </div>
    </>
  )
}
