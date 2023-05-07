/* react default imports */
import { lazy, Suspense } from "react"

/* react router dom imports */
import { Routes, Route } from "react-router-dom"

/* import containing app routes*/
import routes from "./contants/routes"

/* pages  and layouts imports */
import NotFound from "./pages/NotFound"

const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'))
const Login = lazy(() => import('./pages/Login'))
const Users = lazy(() => import('./pages/Users'))
const UserDetails = lazy(() => import('./pages/UserDetails'))
const Home = lazy(() => import('./pages/Home'))

function App() {

  return (
    <Suspense fallback={<p className="page loading">Loading...</p>}>

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.dashboard} element={<DashboardLayout />} >
          <Route index element={<NotFound />} />
          <Route path={routes.users} element={<Users />} />
          <Route path={routes.userDetails} element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
