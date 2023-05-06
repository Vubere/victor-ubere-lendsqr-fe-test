
/* react imports */
import { useState, useEffect, useRef, RefObject } from 'react'

/* react router imports */
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

/* assets */
import logo from '../../assets/logo_and_text.svg'
import searchImg from '../../assets/search.svg'
import notifications from './assets/headerImages/notification.svg'
import dropdown from './assets/headerImages/arrow_down.svg'
import profile from './assets/headerImages/profile.png'

import arrowDown from './assets/sideBarImages/switch_org_arrow.svg'

/* app routes */
import routes from '../../contants/routes'

/* sidebar navigation imports */
import { businesses, customers, settings, switchOrganizations, Dashboard, logOut } from './sidebarNavigation'

/* hooks */
import { useCloseOnOutsideClick } from '../../hooks'


export default function DashboardLayout() {
  const [mobile, setMobile] = useState(window.innerWidth < 768)
  const asideRef = useRef<HTMLDivElement>(null)
  const { open, toggleOpen } = useCloseOnOutsideClick(asideRef)

  const user = localStorage.getItem('lend_sqr_user')
  const navigate = useNavigate()
  useEffect(() => {
    if (!user){
      navigate(routes.login)
    }
  }, [user, navigate])

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])


  return (
    <div className='dashboardLayout'>
      {
        mobile ? <MobileHeader toggleSidebar={toggleOpen}/> :
          <Header />
      }
      {
        !mobile||open ?
          <SideBar divRef={asideRef} /> : null
      }
      <main>
        <Outlet />
      </main>
    </div>
  )
}



const Header = () => {
  const [search, setSearch] = useState('')

  return (
    <header>
      <img src={logo} alt='lendsqr logo' />
      <label htmlFor='search'>
        <input name='search' id='search' value={search} onChange={({ target }) => setSearch(target.value)} placeholder='search for anything' />
        <button>
          <img src={searchImg} />
        </button>
      </label>
      <nav>
        <ul>
          <li className='docs'>Docs</li>
          <li className='notifications'><img src={notifications} alt='notifications' /></li>

          <li className='userDetails'>
            <img src={profile} className='profile' />
            <span>Adedeji <img src={dropdown} alt='dropdown' /></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
const MobileHeader = ({toggleSidebar}:{toggleSidebar:()=>void}) => {
  const [search, setSearch] = useState('')
  const labelRef = useRef<HTMLLabelElement>(null)
  const { open, toggleOpen } = useCloseOnOutsideClick(labelRef)

  return (
    <header className='mobile'>
      <div className="hamburger except" onClick={toggleSidebar}>
        <div className="line except"></div>
        <div className="line except"></div>
        <div className="line except"></div>
      </div>
      <h1>
        <img src={logo} alt='lendsqr logo' />
      </h1>
      {
        open &&
        <label htmlFor='search' ref={labelRef}>
          <input name='search' id='search' value={search} onChange={({ target }) => setSearch(target.value)} placeholder='search for anything' />
          <button >
            <img src={searchImg} />
          </button>
        </label>
      }
      {!open &&
        <>
          <button className="pop" onClick={toggleOpen}>
            <img src={searchImg} />
          </button>
          <nav >
            <ul>
              <li className='docs'>Docs</li>
              <li className='notifications'><img src={notifications} alt='notifications' /></li>
              <li className='userDetails'>
                <img src={profile} className='profile' />
                <img src={dropdown} alt='dropdown' className='dropdown' />
              </li>
            </ul>
          </nav>
        </>
      }
    </header>
  )
}

const SideBar = ({ divRef }: { divRef: RefObject<HTMLDivElement> }) => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('lend_sqr_user')
    navigate(routes.login)
  }

  return (
    <div ref={divRef}>
      <aside>
        <nav>
          <ul className='switchOrganizations'>
            <li>
              <NavLink to={switchOrganizations.route} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                <img src={switchOrganizations.icon} />
                <span>{switchOrganizations.text} </span>
              </NavLink>
              <img src={arrowDown} />
            </li>
          </ul>
          <ul className='dashboard section'>
            <li className='listItem'>
              <NavLink to={Dashboard.route} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                <img src={Dashboard.icon} />
                <span>{Dashboard.text}</span>
              </NavLink>
            </li>
          </ul>
          <ul className='customers section'>
            <h4>CUSTOMERS</h4>
            {customers.map(({ route, icon, text }) => (
              <li key={text} className='listItem'>
                <NavLink to={route} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                  <img src={icon} />
                  <span>{text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className='businesses section'>
            <h4>BUSINESSES</h4>
            {businesses.map(({ route, icon, text }) => (
              <li key={text} className='listItem'>
                <NavLink to={route} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                  <img src={icon} />
                  <span>{text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className='settings section'>
            <h4>SETTINGS</h4>
            {settings.map(({ route, icon, text }) => (
              <li key={text} className='listItem'>
                <NavLink to={route} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                  <img src={icon} />
                  <span>{text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className='logout section'>
            <li className='listItem'>
              <button onClick={logout}>
                <img src={logOut.icon} />
                <span>{logOut.text}</span>
              </button>
            </li>
          </ul>
        </nav>
        <sub className='v'>
          v1.2.0
        </sub>
      </aside>
    </div>
  )
}

