import Heart1 from '@/assets/images/heart1.svg'
import Heart3 from '@/assets/images/heart3.svg'
import Logo from '@/assets/images/Logo.svg'
// import { useNavigate } from 'react-router-dom'
import Login from '@/components/Login/Login'

function Home() {
  // const navigate = useNavigate()
  // const ClickButton = () => {
  //   navigate('/')
  // }
  return (
    <>
      <div className="bg-primary-pink h-screen p-5 flex flex-col">
        <img src={Heart1} width={190} />

        <div className="flex justify-center py-2">
          <img src={Logo} width={267} />
        </div>

        <div className="text-center pb-12  bg-[url('bg_container.svg')] bg-no-repeat bg-cover">
          <div className="text-typo-content py-8 text-lg">
            간편한 웨이팅 등록으로 <br /> 편리하게 주점을 이용해보세요!
          </div>
          <Login />
        </div>
        <div className="py-5">
          <img src={Heart3} width={237} />
        </div>
      </div>
    </>
  )
}
export default Home
