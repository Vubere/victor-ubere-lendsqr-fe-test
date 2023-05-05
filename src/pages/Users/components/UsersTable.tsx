import { useState } from 'react'


/* types */
import { user } from "../../../types"

/* pagination */
import Pagination from "./Pagination"


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
      <table>
        <thead>
          <tr>
            <th>ORGANIZATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => <TableRow user={user} key={user.id} />)}
        </tbody>
      </table>
      <Pagination usersLength={users.length} pagination={{
        start,
        end,
        amountOfPages,
        currentPage: pagination.currentPage,
        usersPerPage: pagination.usersPerPage
      }} setPagination={setPagination} />
    </div>
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
      <td>{user.orgName}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.profile.phoneNumber}</td>
      <td>{createdAt}</td>
      <td>{user.education.employmentStatus}</td>
      <td>
        <div className="dottedMenu">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </td>
    </tr>
  )
}


export default UsersTable;