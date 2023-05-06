import { useEffect, useState } from "react"


/* types */
import { user } from "../../types"


/* components */
import DisplayAmountOfUsers from "./components/DisplayAmountOfUsers"
import UsersTable from "./components/UsersTable"

export default function Users() {
  const [users, setUsers] = useState<user[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Users'
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ')
      .then((res) => res.json())
      .then((data) => {
        if (data?.length) {
          setUsers(data)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="users">
      <h2>Users</h2>
      <DisplayAmountOfUsers />
      <div className="tableContainer">
        {loading && <p className="sub">loading users...</p>}
        {loading?null:users.length > 0 ? <UsersTable users={users} /> : <p className="sub">No users to display</p>}
      </div>
    </div>
  )
}



