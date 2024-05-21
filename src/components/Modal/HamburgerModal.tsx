import React from 'react'
import { putLogout } from '@/api/login/putLogout'
import { Button } from '../Button/Button'
import { IoMdPerson } from 'react-icons/io'
import { MdAccessTimeFilled } from 'react-icons/md'

type Props = {
  onClose: () => void
}

export const HamburgerModal = ({ onClose }: Props) => {
  const logoutButton = async () => {
    const role = localStorage.getItem('role')
    const confirmModal = window.confirm('로그아웃 하시겠습니까?')
    console.log(role)
    if (confirmModal) {
      try {
        if (role === 'MANAGER') {
          const response = await putLogout()
          console.log(response)
          alert('로그아웃이 완료되었습니다.')
          localStorage.removeItem('role')
          window.location.href = '/admin/login'
        } else {
          const response = await putLogout()
          console.log(response)
          alert('로그아웃이 완료되었습니다.')
          window.location.href = '/'
        }
      } catch (error) {
        console.log('로그아웃 실패')
      }
    }
  }

  const onClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  const userName = localStorage.getItem('userName')
  const phoneNumber = localStorage.getItem('phoneNumber')
  return (
    <>
      <div onClick={onClickBackground} className="fixed inset-0 bg-black bg-opacity-15 z-20">
        <div className="flex flex-col h-full w-1/2 lg:w-1/4 absolute bg-white z-50 inset-y-0 right-0 lg:right-1/4 shadow-lg px-5 md:px-10 py-16 ">
          <div className="text-btn-pink font-extrabold text-3xl mb-10">LINE UP</div>

          {userName && phoneNumber ? (
            <>
              <div className="flex gap-2 items-center">
                <IoMdPerson size={20} className="mb-2" />
                <div className="font-bold text-typo-content pb-1">회원 정보</div>
              </div>

              <div className="flex md:flex-row flex-col py-2 md:gap-3">
                <div className="text-typo-content md:w-1/5">이름</div>
                <div className="text-input-text">{userName}</div>
              </div>
              <div className="flex md:flex-row flex-col py-2 md:gap-3 mb-8">
                <div className="text-typo-content md:w-1/5">전화번호</div>
                <div className="text-input-text">{phoneNumber}</div>
              </div>
            </>
          ) : null}
          <div className="flex flex-col py-2 ">
            <div className="flex gap-2 items-center">
              <MdAccessTimeFilled size={20} className="mb-2" />
              <div className="font-bold text-typo-content pb-1">서버 운영 기간</div>
            </div>
            <div className="text-input-text mb-10">24.05.22 ~ 24.05.24</div>

            <div className="font-bold text-typo-content">@ Team blossom</div>
            <div className="flex md:flex-row flex-col py-2 md:gap-3">
              <div className="text-typo-content w-1/5">문의</div>
              <a href="mailto:team.blossom.devs@gmail.com" target="_blank" className=" text-input-text text-sm ">
                team.blossom.devs@gmail.com
              </a>
            </div>
            <div className="flex md:flex-row flex-col py-2 md:gap-3">
              <div className="text-typo-content w-1/5">Backend</div>
              <div className="text-input-text text-sm">박제영 이건 이재은 임현정</div>
            </div>
            <div className="flex md:flex-row flex-col py-2 md:gap-3 mb-8">
              <div className="text-typo-content w-1/5">Frontend</div>
              <div className="text-input-text text-sm mb-4">김혜연 이강혁</div>
            </div>
          </div>
          <Button children="로그아웃" color={'pink'} onClick={logoutButton} />
        </div>
      </div>
    </>
  )
}
