import React from 'react'

const UserCard = ({ avatar, name, bio, age }) => {
  return (
    <div className="UserCard border p-2">
      <div className="d-flex flex-nowrap">
        <div>
          <h6>{name}</h6>
        </div>
      </div>
    </div>
  )
}

export default UserCard