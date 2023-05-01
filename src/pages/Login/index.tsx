/* react imports */
import { useEffect, useState, useRef } from 'react';

/* react router imports */
import { useNavigate, Link } from 'react-router-dom';

/* app routes import */
import routes from '../../contants/routes';


/* images imports */
import logo from '../../assets/logo_and_text.svg';
import loginImage from './assets/login_page_image.svg';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const pwdRef = useRef<HTMLInputElement>(null)
  const togglePwdTypeRef = useRef<HTMLButtonElement>(null)

  const navigate = useNavigate()
  const user = localStorage.getItem('lend_sqr_user')
  useEffect(() => {
    document.title = 'Log In'
    if (user) {
      navigate(routes.dashboard)
    }
  }, [user, navigate])

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

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  let setErrorsTimeout: any;
  const validation = () => {
    let isValid = true
    const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    const tempErr = errors
    if (!form.email.match(emailPattern)) {
      tempErr.email = 'Please enter a valid email'
      isValid = false
    }
    if (form.password.length < 6) {
      tempErr.password = 'Password must be at least 6 characters long'
      isValid = false
    }

    if (!isValid) {
      setErrors({
        ...tempErr
      })
      clearTimeout(setErrorsTimeout)

      setErrorsTimeout = setTimeout(() => {
        setErrors({
          email: '',
          password: ''
        })
      }, 3000)
    }
    return isValid
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (validation()) {
      localStorage.setItem('lend_sqr_user', JSON.stringify(form))
      navigate(routes.usersLink)
    }
  }

  return (
    <div className='login'>
      <header>
        <h1 className="container">
          <img src={logo} alt="logo" />
        </h1>
      </header>
      <main>
        <div className="loginImg">
          <img src={loginImage} alt="login image" />
        </div>
        <div className='formContainer'>
          <div className='text'>
            <h3>Welcome!</h3>
            <p>Enter details to login.</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className='inputs'>
              {errors.email.length > 0 && <p className='error'>{errors.email}</p>}
              <label>
                <input type="text" name='email' value={form.email} onChange={onInputChange} placeholder='Email' />
              </label>
              {errors.password.length > 0 && <p className='error'>{errors.password}</p>}
              <label className='pwd'>
                <input type="password" name='password' value={form.password} onChange={onInputChange} placeholder='Password' ref={pwdRef} />
                <span onClick={togglePwdType} ref={togglePwdTypeRef}>
                  SHOW
                </span>
              </label>
            </div>
            <Link to={routes.login} className='forgotPwd'>Forgot Password?</Link>
            <button type='submit' className='submitBtn'>
              LOG IN
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}