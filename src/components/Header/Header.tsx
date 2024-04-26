import { IoIosArrowBack } from 'react-icons/io'
import Logo from '@/assets/images/Logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import Button from '@/components/Button/Button'

function Header() {
  return (
    <>
      <div className="flex my-5 md:my-10 px-5 items-center">
        <div className="flex flex-1 justify-start">
          <Button color="toggle" onClick={'#'}>
            <IoIosArrowBack size={22} />
          </Button>
        </div>
        <div className="flex flex-1 justify-end">
          <Button color="toggle" onClick={'#'}>
            <RxHamburgerMenu size={22} />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-10 my-7">
        <img src={Logo} className="w-1/2" />
      </div>
    </>
  )
}
export default Header
