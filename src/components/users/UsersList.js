import React from 'react'
import UserCard from './UserCard'

const UsersList = ({ users }) => {
  return (
    <div className="UsersList">
      {users.map((user, i) => (
        <UserCard key={i} {...user} />
      ))}
    </div>
  )
}

export default UsersList