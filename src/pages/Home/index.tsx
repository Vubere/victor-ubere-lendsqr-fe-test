
/* react imports */
import {useEffect} from 'react';

/* react router dom imports */
import { useNavigate} from 'react-router-dom';

/* app routes import */
import routes from '../../contants/routes';



export default function Home() {
  const user = localStorage.getItem('lend_sqr_user')
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate(routes.usersLink)
    } else {
      navigate(routes.login)
    }
  }, [user, navigate])
  return (
    <>
    </>
  )

}