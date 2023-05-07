import {useEffect} from 'react'



export default function NotFound() {

  useEffect(() => {
    document.title = 'Not Found'
  }, [])
  return (
    <div className="notFound" data-testid='notFound'>404, not found</div>
  )
}