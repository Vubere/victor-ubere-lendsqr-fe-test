
/* react imports */
import { useState } from 'react'

/* react router imports */
import { Outlet, Link } from 'react-router-dom'

/* assets */
import logo from '../../assets/logo_and_text.svg'
import searchImg from '../../assets/search.svg'
import notifications from './assets/headerImages/notification.svg'
import dropdown from './assets/headerImages/arrow_down.svg'

/* app routes */
import routes from '../../contants/routes'

/* sidebar navigation imports */
import { businesses, customers, settings, switchOrganizations, Dashboard, logOut } from './sidebarNavigation'


export default function DashboardLayout() {
 
  return (
    <>
      <Header />
      <SideBar />
      <div>
        <Outlet />
      </div>
    </>
  )
}



const Header = () => {
  const [search, setSearch] = useState('')

  return (
    <header>
      <img src={logo} alt='lendsqr logo' />
      <label htmlFor='search'>
        <input name='search' id='search' value={search} onChange={({ target }) => setSearch(target.value)} />
        <button>
          <img src={searchImg} alt='search component' />
        </button>
      </label>
      <nav>
        <ul>
          <li>Docs</li>
          <li><img src={notifications} alt='notifications' /></li>
          <li>
            <Link to={routes.usersLink}>
              <img src="" alt="" />
              <span>Adedeji <img src={dropdown} alt='dropdown' /></span>
            </Link>
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
        <ul>
          <li>
            <Link to={switchOrganizations.route}>
              <img src={switchOrganizations.icon}  />
              <span>{switchOrganizations.text}</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={Dashboard.route}>
              <img src={Dashboard.icon}  />
              <span>{Dashboard.text}</span>
            </Link>
          </li>
        </ul>
        <ul>
          <h4>CUSTOMERS</h4>
          {customers.map(({ route, icon, text }) => (
            <li key={route}>
              <Link to={route}>
                <img src={icon}  />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <h4>BUSINESSES</h4>
          {businesses.map(({ route, icon, text }) => (
            <li key={route}>
              <Link to={route}>
                <img src={icon}  />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <h4>SETTINGS</h4>
          {settings.map(({ route, icon, text }) => (
            <li key={route}>
              <Link to={route}>
                <img src={icon}  />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <button>
              <img src={logOut.icon}  />
              <span>{logOut.text}</span>
            </button>
          </li>
        </ul>
      </nav>
      <sub>
        v1.2.0
      </sub>
    </aside>
  )
}