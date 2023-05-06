import { useState } from 'react'



export default function Filter({ filterRef }: { filterRef: React.RefObject<HTMLDivElement> }) {
  const [form, setForm] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='filterContainer' ref={filterRef}>
      <form>
        <div className='org'>
          <label htmlFor="organization">Organization</label>
          <select name="organization" id="organization" value={form.organization} onChange={onChange}>
            <option value="">Select</option>
            <option value="all">All</option>
            <option value="org1">Organization 1</option>
            <option value="org2">Organization 2</option>
            <option value="org3">Organization 3</option>
          </select>
          <span></span>
        </div>
        <div className='username'>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder='Username' id="username" value={form.username} onChange={onChange} />
        </div>
        <div className='email'>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder='Email' onChange={onChange} value={form.email} />
        </div>
        <div className='date'>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" placeholder='Date' id="date" value={form.date} onChange={onChange} />
        </div>
        <div className='phone'>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" id="phone" placeholder='Phone Number' onChange={onChange} value={form.phone} />
        </div>
        <div className='status'>
          <label htmlFor="status">Status</label>
          <select name="status" id="status" value={form.status} onChange={onChange}>
            <option value="" >Select</option>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value='blacklisted'>Blacklisted</option>
            <option value='pending'>Pending</option>
          </select>
          <span></span>
        </div>
        <div className='buttons'>
          <button className='reset' onClick={e => e.preventDefault()}>
            Reset
          </button>
          <button className='filter' onClick={e => e.preventDefault()}>
            Filter
          </button>
        </div>
      </form>
    </div>
  )
}