
/* react imports */
import { useState, useEffect, useRef, RefObject } from 'react'

/* react router imports */
import { Outlet, NavLink } from 'react-router-dom'

/* assets */
import logo from '../../assets/logo_and_text.svg'
import searchImg from '../../assets/search.svg'
import notifications from './assets/headerImages/notification.svg'
import dropdown from './assets/headerImages/arrow_down.svg'
import profile from './assets/headerImages/profile.png'

import arrowDown from './assets/sideBarImages/switch_org_arrow.svg'

/* app routes */

/* sidebar navigation imports */
import { businesses, customers, settings, switchOrganizations, Dashboard, logOut } from './sidebarNavigation'



export default function DashboardLayout() {
  const [mobile, setMobile] = useState(window.innerWidth < 768)
  const asideRef = useRef<HTMLDivElement>(null)
  const { open, toggleOpen } = useCloseOnOutsideClick(asideRef)

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
              <button>
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

function useCloseOnOutsideClick<T extends RefObject<HTMLElement>>(ref: T) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)
  const close = () => setOpen(false)
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current === null) return
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
      if(event.target instanceof HTMLDivElement){
        if(event.target.classList.contains('except')) setTimeout(()=>setOpen(false),200)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
  return { open, toggleOpen, close }
}