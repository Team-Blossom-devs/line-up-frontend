import { Logo } from '@/components/Logo/Logo'
import { LoginForm } from '@/components/Login/LoginForm'

function Login() {
  return (
    <>
      <div className="container mt-20 items-center">
        <Logo />
        <div className="my-5 font-bold text-2xl md:text-3xl">관리자 로그인</div>
        <div className="text-input-text">부여받으신 회원정보를 통해 로그인해주세요</div>
        <LoginForm />
      </div>
    </>
  )
}
export default Login
