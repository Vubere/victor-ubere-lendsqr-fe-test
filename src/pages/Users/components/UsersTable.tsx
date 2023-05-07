import { useState, useRef, } from 'react'


/* types */
import { User } from "../../../types"

/* components */
import UserOptions from './UserOptions'
import Pagination from "./Pagination"

/* images */
import filter from '../assets/filter.svg'
import dottedMenu from '../assets/dottedMenu.svg'

/* hooks */
import { useCloseOnOutsideClick } from '../../../hooks'
import Filter from './Filter'


const UsersTable = ({ users }: { users: User[] }) => {

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
              {['organization', 'username', 'email', 'phone number', 'date joined', 'status'].map((title) => (
                <Th key={title} title={title} />
              ))}
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
const TableRow = ({ user }: { user: User }) => {

  const ref = useRef<HTMLDivElement>(null)
  const { open, toggleOpen } = useCloseOnOutsideClick(ref)


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
          {user.userName.length > 12 ? user.userName.slice(0, 12) + '...' : user.userName}
        </span>
      </td>
      <td className='email'>
        <span>
          {user.email.length > 24 ? user.email.slice(0, 24) + '...' : user.email}
        </span>
      </td>
      <td className='phone'>
        <span>
          {user.phoneNumber.length > 17 ? user.phoneNumber.slice(0, 17) + '...' : user.phoneNumber}
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
        <span className="dottedMenu" onClick={() => toggleOpen()}>
          <img src={dottedMenu} />
        </span>
        {open && <UserOptions id={user.id} optionsRef={ref} />}
      </td>
    </tr>
  )
}

const Th = ({ title }: { title: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { open, toggleOpen } = useCloseOnOutsideClick(ref)
  return <th key={title}>
    <span>
      {title.toUpperCase()} <img src={filter} onClick={toggleOpen} className='except' />
    </span>
    {open && <Filter filterRef={ref} />}
  </th>
}

export default UsersTable;