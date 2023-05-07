/* react default imports */
import { lazy, Suspense } from "react"

/* react router dom imports */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* import containing app routes*/
import routes from "./contants/routes"
import TakeToTop from "./components/TakeToTop"

/* pages  and layouts imports */
import ErrorBoundary from "./components/Errorboundary"
import NotFound from "./pages/NotFound"

const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'))
const Login = lazy(() => import('./pages/Login'))
const Users = lazy(() => import('./pages/Users'))
const UserDetails = lazy(() => import('./pages/UserDetails'))
const Home = lazy(() => import('./pages/Home'))

function App() {

  return (
    <ErrorBoundary>
      <Suspense fallback={<p className="page loading">Loading...</p>}>
        <BrowserRouter>
          <TakeToTop>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.dashboard} element={<DashboardLayout />} >
                <Route index element={<NotFound/>} />
                <Route path={routes.users} element={<Users />} />
                <Route path={routes.userDetails} element={<UserDetails />} />
                <Route path="*" element={<NotFound/>} />
              </Route>
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </TakeToTop>
        </BrowserRouter >
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
