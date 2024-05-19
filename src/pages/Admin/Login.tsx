import { Logo } from '@/components/Logo/Logo'
import { LoginForm } from '@/components/Login/LoginForm'
import { ContextType } from "./AdminFunnel"

function Login({ roleContext }: { roleContext: React.Context<ContextType | null> }) {
  return (
    <>
      <div className="container mt-20 items-center">
        <Logo />
        <div className="my-5 font-bold text-2xl md:text-3xl">관리자 로그인</div>
        <div className="text-input-text">부여받으신 회원정보를 통해 로그인해주세요</div>
        <LoginForm roleContext={roleContext} />
      </div>
    </>
  )
}
export default Login
