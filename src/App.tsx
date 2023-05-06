/* react default imports */
import { lazy, Suspense } from "react"

/* react router dom imports */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* import containing app routes*/
import routes from "./contants/routes"
import TakeToTop from "./components/TakeToTop"

/* pages  and layouts imports */
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'))
const Login = lazy(() => import('./pages/Login'))
const Users = lazy(() => import('./pages/Users'))
const UserDetails = lazy(() => import('./pages/UserDetails'))
const Home = lazy(() => import('./pages/Home'))

function App() {

  return (
    <>
      <Suspense fallback={<p className="page loading">Loading...</p>}>

        <BrowserRouter>
          <TakeToTop>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.dashboard} element={<DashboardLayout />} >
                <Route index element={<div className="notFound">404, not found</div>}/>
                <Route path={routes.users} element={<Users />} />
                <Route path={routes.userDetails} element={<UserDetails />} />
                <Route path="*" element={<div className="notFound">404, not found</div>} />
              </Route>
              <Route path="*" element={<div className="notFound">404, not found</div>} />
            </Routes>
          </TakeToTop>
        </BrowserRouter >
      </Suspense>
    </>
  )
}

export default App
