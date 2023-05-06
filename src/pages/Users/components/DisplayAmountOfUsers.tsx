

/* helpers */
import { formatAmount } from "../../../helpers"

/* icons */
import users from '../assets/usersIcon.svg'
import activeUsers from '../assets/usersSavings.svg'
import usersSavingsIcon from '../assets/usersWithSavings.svg'
import usersWithLoans from '../assets/usersWithLoans.svg'




const DisplayUsersAmount = () => {

  return (
    <div className='usersCountContainer'>
      {usersAmounDummyData.map((data) => <Card title={data.title} amount={data.amount} icon={data.icon} key={data.title} />)}
    </div>
  )
}


const Card = ({ title, amount, icon }: usersCountProps) => {

  const formattedAmount = formatAmount(amount)

  return (
    <div className='card'>
      <div className='icon'>
        <img src={icon} />
      </div>
      <div className='info'>
        <h4>{title}</h4>
        <h3>{formattedAmount}</h3>
      </div>
    </div>
  )
}
type usersCountProps = {
  title: string,
  amount: number,
  icon: string
}

const usersAmounDummyData = [
  {
    title: 'users',
    amount: 2453,
    icon: users
  },
  {
    title: 'active users',
    amount: 2453,
    icon: activeUsers
  },
  {
    title: 'users with loans',
    amount: 12453,
    icon: usersWithLoans
  },
  {
    title: 'users with savings',
    amount: 102453,
    icon: usersSavingsIcon
  },
]
export default DisplayUsersAmount;