
import {Outlet} from 'react-router-dom'

import logo from '../../assets/logo_and_text.svg'



export default function DashboardLayout () {
  console.log('here')
  return (
    <>
      <Header/>
      <SideBar/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}



const Header = () => {
  return (
    <header>
      <img src={logo} alt='lendsqr logo'/>
    </header>
  )
}

const SideBar = () => {
  return (
    <aside>
      
    </aside>
  )
}