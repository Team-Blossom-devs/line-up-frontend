import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/Button/Button'
import { HamburgerModal } from '@/components/Modal/HamburgerModal'

export const Header = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="flex my-5 md:my-10 px-5 items-center">
        <Button color="toggle" onClick={() => window.history.back()}>
          <IoIosArrowBack size={22} />
        </Button>
        <div className="flex flex-1 justify-end">
          <Button
            color="toggle"
            onClick={() => {
              setOpenModal(true)
            }}
          >
            <RxHamburgerMenu size={22} />
          </Button>
        </div>
      </div>
      <div className="flex justify-center px-10 md:px-20 my-5">
        <Logo />
      </div>
      {openModal && <HamburgerModal onClose={() => setOpenModal(false)} />}
    </>
  )
}
