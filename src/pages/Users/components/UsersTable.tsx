import { useState } from 'react'


/* types */
import { user } from "../../../types"

/* pagination */
import Pagination from "./Pagination"

/* images */
import filter from '../assets/filter.svg'
import dottedMenu from '../assets/dottedMenu.svg'


const UsersTable = ({ users }: { users: user[] }) => {

  /* pagination */
  const [pagination, setPagination] = useState({
    currentPage: 1,
    usersPerPage: 10,
  })
  const start = (pagination.currentPage - 1) * pagination.usersPerPage
  const end = start + pagination.usersPerPage

  const currentUsers = users.slice(start, end)
  const amountOfPages = Math.ceil(users.length / pagination.usersPerPage)

  return (
    <div className='usersTable'>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>
                <span className='org'>
                  ORGANIZATION <img src={filter} />
                </span>
              </th>
              <th>
                <span className='username'>
                  USERNAME <img src={filter} />
                </span>
              </th>
              <th>
                <span className='email'>
                  EMAIL <img src={filter} />
                </span>
              </th>
              <th>
                <span className='phone'>
                  PHONE NUMBER <img src={filter} />
                </span>
              </th>
              <th>
                <span className='date'>
                  DATE JOINED <img src={filter} />
                </span>
              </th>
              <th>
                <span className='status'>
                  STATUS <img src={filter} />
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => <TableRow user={user} key={user.id} />)}
          </tbody>
        </table>
      </div>
      <Pagination usersLength={users.length} pagination={{
        start,
        end,
        amountOfPages,
        currentPage: pagination.currentPage,
        usersPerPage: pagination.usersPerPage
      }} setPagination={setPagination} />
    </div >
  )
}
const TableRow = ({ user }: { user: user }) => {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", 'Nov', 'Dec']
  const date = new Date(user.createdAt)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const createdAt = `${month} ${day}, ${year} ${time}`

  return (
    <tr>
      <td className='orgName'>
        <span>
          {user.orgName.length > 15 ? user.orgName.slice(0, 15) + '...' : user.orgName}
        </span>
      </td>
      <td className='username'>
        <span>
          {user.userName.length>12?user.userName.slice(0, 12)+'...': user.userName}
        </span>
      </td>
      <td className='email'>
        <span>
          {user.email.length > 24 ? user.email.slice(0, 24) + '...' : user.email}
        </span>
      </td>
      <td className='phone'>
        <span>
          {user.phoneNumber.length>17?user.phoneNumber.slice(0, 17)+'...':user.phoneNumber}
        </span>
      </td>
      <td className='created'>
        <span>
          {createdAt}
        </span>
      </td>
      <td className='status'>
        <span>
          {user.education.employmentStatus}
        </span>
      </td>
      <td className='action'>
        <span className="dottedMenu">
          <img src={dottedMenu} />
        </span>
      </td>
    </tr>
  )
}


export default UsersTable;