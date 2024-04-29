import Heart1 from '@/assets/images/heart1.svg'
import Heart3 from '@/assets/images/heart3.svg'
import Logo from '@/assets/images/Logo.svg'
import Heart2 from '@/assets/images/bg_container.svg'
// import { useNavigate } from 'react-router-dom'
import { KakaoLogin } from '@/components/Login/KakaoLogin'

export const Home = () => {
  // const navigate = useNavigate()
  // const ClickButton = () => {
  //   navigate('/')
  // }
  return (
    <>
      <div className="bg-primary-pink p-5 h-full flex flex-col">
        <img src={Heart1} className="w-5/12" />

        <div className="relative flex flex-col text-center items-center py-2">
          <img src={Logo} className="w-8/12 z-20" />

          <img src={Heart2} className="mt-8 absolute z-0" />

          <div className="z-20 text-typo-content my-8 text-2xl">
            간편한 웨이팅 등록으로 <br /> 편리하게 주점을 이용해보세요!
            <KakaoLogin />
          </div>
          {/* <div className="text-typo-content">LINE UP은 축제 종료 후 모든 개인정보를 폐기함을 알려드립니다.</div> */}
        </div>
        <div>
          <img src={Heart3} className="w-7/12 relative z-20" />
        </div>
      </div>
    </>
  )
}
