import Logo from '@/assets/images/Logo.svg'
import Button from '@/components/Button/Button'

function Login() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="my-10 md:my-16 w-2/5 md:w-3/5">
          <img src={Logo} />
        </div>
        <div className="font-bold text-xl">로그인</div>
        <input />
        <Button color="pink" onClick={() => {}} children="로그인" />
      </div>
    </>
  )
}
export default Login
