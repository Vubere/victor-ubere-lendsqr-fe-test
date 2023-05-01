/* react default imports */
import { lazy } from "react"

/* react router dom imports */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* import containing app routes*/
import routes from "./contants/routes"

/* pages  and layouts imports */
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'))
const Login = lazy(() => import('./pages/Login'))
const Users = lazy(() => import('./pages/Users'))
const UserDetails = lazy(() => import('./pages/UserDetails'))
const Home = lazy(() => import('./pages/Home'))

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.dashboard} element={<DashboardLayout />} >
            <Route path={routes.users} element={<Users />} />
            <Route path={routes.userDetails} element={<UserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
