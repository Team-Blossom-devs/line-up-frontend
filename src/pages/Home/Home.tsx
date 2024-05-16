import { Heart1, Heart2, Heart3 } from '@/assets/images/images'
import { Logo } from '@/components/Logo/Logo'
import { KakaoLogin } from '@/components/Login/LoginForm'

export const Home = () => {
  return (
    <>
      <div className="bg-primary-pink container">
        <img src={Heart1} className="w-5/12 mt-5" />
        <div className="relative flex flex-col text-center items-center py-2">
          <Logo />
          <img src={Heart2} className="mt-28 absolute z-0" />
          <KakaoLogin />
        </div>
        <img src={Heart3} className="w-7/12 z-20" />
      </div>
    </>
  )
}
