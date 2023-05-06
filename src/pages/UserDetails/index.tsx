import { useEffect, useState } from "react"

/* react router dom */
import { useParams } from "react-router-dom"
import { user } from "../../types"



export default function UserDetails() {
  const [user, setUser] = useState<user>()
  const { id } = useParams()
  const [error, setError] = useState('')

  useEffect(() => {
    if (id) {
      const users = localStorage.getItem('users')
      if (users != null) {
        const filteredUser = JSON.parse(users).filter((u: user) => u.id === id)
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
  console.log(user)

  const monthlyIncome = user != undefined && user.education.monthlyIncome.sort((a: string, b: string) => Number(a) - Number(b))

  const IncomeRange = () => {
    if (!monthlyIncome) return null
    return (
      <>{monthlyIncome[0]}-{monthlyIncome[1]}</>
    )
  }



  return (
    <div className="userDetails">
      <div><img /> Back to Users</div>
      <div>
        <h2>User Details</h2>
        <div>
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </div>
      </div>
      {error && <p className="sub">{error}</p>}
      {user && <div className="userDetailsContainer">
        <section className="header">
          <div className="userInfo">
            <img alt="user avatar" />
            <div>
              <h3>{user.profile.firstName} {user.profile.lastName}</h3>
              <p>{user.email}</p>
            </div>
            <div>
              <h3>User's Tier</h3>
              <p>
                <img src="" />
                <img src="" />
                <img src="" />
              </p>
            </div>
            <div>
              <h3>{user.accountBalance}</h3>
              <div>
                {user.accountNumber}/Providus Bank
              </div>
            </div>
          </div>
          <ul>
            <li>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </section>
        <section className="body">
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
                <p>{user.education.loanRepayment}</p>
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
        </section>
      </div>}
    </div>
  )
}