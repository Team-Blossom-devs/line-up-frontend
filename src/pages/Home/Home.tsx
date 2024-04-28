import Heart1 from '@/assets/images/heart1.svg'
import Heart3 from '@/assets/images/heart3.svg'
import Logo from '@/assets/images/Logo.svg'
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

        <div className="flex justify-center py-2 lg:py-8">
          <img src={Logo} className="w-8/12 " />
        </div>

        <div className="text-center py-4 md:py-8 min-h-[230px] md:min-h-[400px] bg-[url('bg_container.svg')] bg-no-repeat bg-contain">
          <div className="text-typo-content md:text-2xl leading-relaxed md:leading-loose pb-10">
            간편한 웨이팅 등록으로 <br /> 편리하게 주점을 이용해보세요!
          </div>
          <KakaoLogin />
          {/* <div className="text-typo-content">LINE UP은 축제 종료 후 모든 개인정보를 폐기함을 알려드립니다.</div> */}
        </div>
        <div>
          <img src={Heart3} className="w-7/12" />
        </div>
      </div>
    </>
  )
}
