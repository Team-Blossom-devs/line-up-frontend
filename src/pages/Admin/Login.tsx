import Logo from '@/assets/images/Logo.svg'
import Button from '@/components/Button/Button'
import { LoginForm } from '@/components/Login/LoginForm'

function Login() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-20 md:mt-28 mb-12 w-1/2 ">
          <img src={Logo} />
        </div>
        <div className="font-bold text-xl md:text-3xl">관리자 로그인</div>
        <div className="text-input-text pt-3 pb-5">부여받으신 회원정보를 통해 로그인해주세요</div>
        <LoginForm />
        <div className="py-5 md:py-10 w-4/5 md:w-full">
          <Button color="pink" onClick={() => {}} children="로그인" />
        </div>
      </div>
    </>
  )
}
export default Login
