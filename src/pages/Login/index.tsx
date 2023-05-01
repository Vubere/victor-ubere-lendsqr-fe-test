import { useNavigate } from 'react-router-dom';


import routes from '../../contants/routes';


export default function Login() {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  if (user) {
    navigate(routes.dashboard)
  }

  return (
    <>
      <h1>Login</h1>
    </>
  )
}