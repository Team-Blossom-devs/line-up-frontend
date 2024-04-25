import Heart1 from '@/assets/images/heart1.svg'
import Heart3 from '@/assets/images/heart3.svg'
import Logo from '@/assets/images/Logo.svg'
import Button from '@/components/Button/Button'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const ClickButton = () => {
    navigate('/')
  }
  return (
    <>
      <div className="bg-primary-pink h-screen p-5 flex flex-col">
        <img src={Heart1} width={190} />
        <div className="flex justify-center py-2">
          <img src={Logo} width={267} />
        </div>
        <div className="py-5 bg-[url('bg_container.svg')] bg-no-repeat bg-cover">
          <div className="text-center text-typo-content h-full">
            <div className="pb-8 text-lg">
              간편한 웨이팅 등록으로 <br /> 편리하게 주점을 이용해보세요!
            </div>
            <Button type="button" color="pink" onClick={ClickButton} children="회원가입" />
            {/* <button className="w-72 h-11 bg-btn-pink rounded-lg font-bold">회원가입</button> */}
            <div>카카오</div>
          </div>
        </div>
        <div>
          <img src={Heart3} width={237} />
        </div>
      </div>
    </>
  )
}
export default Home
