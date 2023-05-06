
/* routes */
import routes from '../../../contants/routes'

/* images */
import view from '../assets/view.svg'
import blacklist from '../assets/blackList.svg'
import acitvate from '../assets/activate.svg'
import { Link } from 'react-router-dom'




export default function UserOptions({ id, optionsRef }: { id: string, optionsRef: React.RefObject<HTMLDivElement> }) {

  return (
    <div className="userOptionsPopup" ref={optionsRef}>
      <ul>
        <li>
          <Link to={routes.usersLink+'/'+id}>
            <img src={view} /> View Details
          </Link>
        </li>
        <li><img src={blacklist} /> Blacklist User</li>
        <li><img src={acitvate} /> Activate User</li>
      </ul>
    </div>
  )
}