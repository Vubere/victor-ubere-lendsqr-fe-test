/* react imports */
import { useEffect, useState, useRef } from 'react';

/* react router imports */
import { useNavigate,Link } from 'react-router-dom';

/* app routes import */
import routes from '../../contants/routes';


/* images imports */
import logo from '../../assets/lend_sqr_logo.svg';
import loginImage from './assets/login_page_image.svg';

export default function Login() {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  const pwdRef = useRef<HTMLInputElement>(null)
  const togglePwdTypeRef = useRef<HTMLButtonElement>(null)

  if (user) {
    navigate(routes.dashboard)
  }
  useEffect(() => {
    document.title = 'Log In'
  }, [])


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const togglePwdType = () => {
    if (pwdRef.current && togglePwdTypeRef.current) {

      if (pwdRef?.current?.type === 'password') {
        pwdRef.current.type = 'text'
        togglePwdTypeRef.current.textContent = 'HIDE'
      } else {
        pwdRef.current.type = 'password'
        togglePwdTypeRef.current.textContent = 'SHOW'
      }
    }
  }

  return (
    <>
      <header>
        <h1 className="container">
          <img src={logo} alt="logo" />
          lendsqr
        </h1>
      </header>
      <main>
        <section className="container">
          <div className="login">
            <img src={loginImage} alt="login image" />
          </div>
          <div>
            <div>
              <h3>Welcome!</h3>
              <p>Enter details to login.</p>
            </div>
            <form onSubmit={onSubmit}>
              <label>
                <input type="text" placeholder='Email' />
              </label>
              <label>
                <input type="password" placeholder='Password' ref={pwdRef} />
                <button onClick={togglePwdType} ref={togglePwdTypeRef}>
                  SHOW
                </button>
              </label>
              <Link to={routes.login}>Forgot Password?</Link>
              <button>
                LOG IN
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}