
/* react imports */
import { useState } from 'react'

/* react router imports */
import { Outlet, Link } from 'react-router-dom'

/* assets */
import logo from '../../assets/logo_and_text.svg'
import searchImg from '../../assets/search.svg'
import notifications from './assets/headerImages/notification.svg'
import dropdown from './assets/headerImages/arrow_down.svg'
import profile from './assets/headerImages/profile.png'

/* app routes */
import routes from '../../contants/routes'

/* sidebar navigation imports */
import { businesses, customers, settings, switchOrganizations, Dashboard, logOut } from './sidebarNavigation'


export default function DashboardLayout() {

  return (
    <div className='dashboardLayout'>
      <Header />
      <SideBar />
      <div>
        <Outlet />
      </div>
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

const SideBar = () => {


  return (
    <aside>
      <nav>
        <ul className='switchOrganizations'>
          <li>
            <Link to={switchOrganizations.route}>
              <img src={switchOrganizations.icon} />
              <span>{switchOrganizations.text}</span>
            </Link>
          </li>
        </ul>
        <ul className='dashboard'>
          <li>
            <Link to={Dashboard.route}>
              <img src={Dashboard.icon} />
              <span>{Dashboard.text}</span>
            </Link>
          </li>
        </ul>
        <ul className='customers'>
          <h4>CUSTOMERS</h4>
          {customers.map(({ route, icon, text }) => (
            <li key={route}>
              <Link to={route}>
                <img src={icon} />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='businesses'>
          <h4>BUSINESSES</h4>
          {businesses.map(({ route, icon, text }) => (
            <li key={route}>
              <Link to={route}>
                <img src={icon} />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='settings'>
          <h4>SETTINGS</h4>
          {settings.map(({ route, icon, text }) => (
            <li key={route}>
              <Link to={route}>
                <img src={icon} />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='logout'>
          <li>
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
  )
}