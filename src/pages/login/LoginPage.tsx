import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const LoginPage: React.FC  = () => {
  const navigate = useNavigate()
  const goLogin = () => {
    navigate('/demo')
  }
  return (
    <>
      <h1>登录页面</h1>
      <Button onClick={goLogin} >去登录</Button>
    </>
  )
}

export default LoginPage
