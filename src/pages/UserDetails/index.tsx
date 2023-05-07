import { useEffect, useState } from "react"

/* react router dom */
import { Link, useParams } from "react-router-dom"
import { User } from "../../types"


/* images */
import backArrow from '../../assets/backArrow.svg'
import avatar from './assets/avatar.svg'
import emptyStar from './assets/emptyStar.svg'
import filledStar from './assets/filledStar.svg'
import routes from "../../contants/routes"

const currencies: {
  [key: string]: string
} = {
  NGN: '₦',
  USD: '$',
  GBP: '£',
  EUR: '€'
}


export default function UserDetails() {
  const [user, setUser] = useState<User>()
  const { id } = useParams()
  const [error, setError] = useState('')
  const [view, setView] = useState<'general' | 'documents' | 'bank' | 'loans' | 'savings' | 'app'>('general')

  useEffect(() => {
    document.title = 'User Details'
    if (id) {
      const users = localStorage.getItem('users')
      if (users != null) {
        const filteredUser = JSON.parse(users).filter((u: User) => u.id === id)
        if (filteredUser.length) {
          setUser(filteredUser[0])
        } else {
          setError('unable to find user')
        }
      } else {
        setError('unable to find user')
      }
    }
  }, [id])

  const userCurrency = (user != undefined && currencies[user.profile.currency]) || ''

  const changeView = (v: 'general' | 'documents' | 'bank' | 'loans' | 'savings' | 'app') => {
    if (v == view) return
    setView(v)
  }


  return (
    <div className="userDetailsPage">
      <div className="back">
        <Link to={routes.usersLink}>
          <img src={backArrow} />
        </Link>
        Back to Users</div>
      <div className="top">
        <h2>User Details</h2>
        <div className="buttons">
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </div>
      </div>
      {error && <p className="sub">{error}</p>}
      {user ? <div className="userDetailsContainer">

        <section className="header">
          <div className="userInfo">
            <div className="user">
              <img src={avatar} alt="user avatar" className="avatar" />
              <div className="name">
                <h3>{user.profile.firstName} {user.profile.lastName}</h3>
                <p>LSQFfS87g90</p>
              </div>
            </div>
            <div className="sec">
              <div className="tier">
                <h3>User's Tier</h3>
                <div className="stars">
                  <img src={filledStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                </div>
              </div>
              <div className="acc">
                <h3>{userCurrency}{user.accountBalance}</h3>
                <p>
                  {user.accountNumber}/Providus Bank
                </p>
              </div>
            </div>
          </div>
          <nav className="list">

            <ul>
              <li className={view == 'general' ? 'active' : ''} onClick={() => changeView('general')}>General Details</li>
              <li className={view == 'documents' ? 'active' : ''}>Documents</li>
              <li className={view == 'bank' ? 'active' : ''}>Bank Details</li>
              <li className={view == 'loans' ? 'active' : ''}>Loans</li>
              <li className={view == 'savings' ? 'active' : ''}>Savings</li>
              <li className={view == 'app' ? 'active' : ''}>App and System</li>
            </ul>
          </nav>
        </section>
      </div> : null
      }
      {user && view === 'general' ?
        <GeneralView user={user} />
        : null}
    </div>
  )
}


const GeneralView = ({ user }: { user: User }) => {
  const monthlyIncome = user != undefined && user.education.monthlyIncome.sort((a: string, b: string) => Number(a) - Number(b))
  const userCurrency = (user != undefined && currencies[user.profile.currency]) || ''

  const IncomeRange = () => {
    if (!monthlyIncome) return null
    return (
      <>{userCurrency}{monthlyIncome[0]}-{userCurrency}{monthlyIncome[1]}</>
    )
  }
  return (
    <div className="document">
      <section>
        <h3>Personal Information</h3>
        <div>
          <div>
            <h4>FULL NAME</h4>
            <p>{user.profile.firstName} {user.profile.lastName}</p>
          </div>
          <div>
            <h4>PHONE NUMBER</h4>
            <p>{user.profile.phoneNumber}</p>
          </div>
          <div>
            <h4>EMAIL ADDRESS</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>BVN</h4>
            <p>{user.profile.bvn}</p>
          </div>
          <div>
            <h4>GENDER</h4>
            <p>{user.profile.gender}</p>
          </div>
          <div>
            <h4>MARITAL STATUS</h4>
            <p>Single</p>
          </div>
          <div>
            <h4>CHILDREN</h4>
            <p>None</p>
          </div>
          <div>
            <h4>TYPE OF RESIDENCE</h4>
            <p>Parent's Apartment</p>
          </div>
          <div></div>
        </div>
      </section>
      <section>
        <h3>Education and Employment</h3>
        <div>
          <div>
            <h4>LEVEL OF EDUCATION</h4>
            <p>{user.education.level}</p>
          </div>
          <div>
            <h4>EMPLOYMENT STATUS</h4>
            <p>{user.education.employmentStatus}</p>
          </div>
          <div>
            <h4>SECTOR OF EMPLOYMENT</h4>
            <p>{user.education.sector}</p>
          </div>
          <div>
            <h4>DURATION OF EMPLOYMENT</h4>
            <p>{user.education.duration}</p>
          </div>
          <div>
            <h4>OFFICE EMAIL</h4>
            <p>{user.education.officeEmail}</p>
          </div>
          <div>
            <h4>MONTHLY INCOME</h4>
            <p>{<IncomeRange />}</p>
          </div>
          <div>
            <h4>LOAN PAYMENT</h4>
            <p>{userCurrency}{user.education.loanRepayment}</p>
          </div>
        </div>
      </section>
      <section>
        <h3>Socials</h3>
        <div>
          <div>
            <h4>TWITTER</h4>
            <p>{user.socials.twitter}</p>
          </div>
          <div>
            <h4>FACEBOOK</h4>
            <p>{user.socials.facebook}</p>
          </div>
          <div>
            <h4>INSTAGRAM</h4>
            <p>{user.socials.instagram}</p>
          </div>
        </div>
      </section>
      <section>
        <h3>Guarantor</h3>
        <div>
          <div>
            <h4>FULL NAME</h4>
            <p>{user.guarantor.firstName} {user.guarantor.lastName}</p>
          </div>
          <div>
            <h4>PHONE NUMBER</h4>
            <p>{user.guarantor.phoneNumber}</p>
          </div>
          <div>
            <h4>EMAIL ADDRESS</h4>
            <p>user@email.com</p>
          </div>
          <div>
            <h4>RELATIONSHIP</h4>
            <p>kin</p>
          </div>
        </div>
      </section>
    </div>
  )
}