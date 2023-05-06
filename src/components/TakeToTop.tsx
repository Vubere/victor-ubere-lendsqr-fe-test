import {useEffect} from 'react'

/* react router dom */
import { useLocation } from 'react-router-dom'



/* this components takes the page to the top when user navigate to a new page */


export default function TakeToTop({children}:{children: React.ReactNode}) {
  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location.pathname])

  return (
    <>
      {children}
    </>
  )
}