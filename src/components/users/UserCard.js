import React from 'react'

const UserCard = ({ avatar, name, bio, age }) => {
  return (
    <div className="UserCard border p-2">
      <div className="d-flex flex-nowrap">
        <img className="rounded mr-3" src={avatar} alt="avatar" style={{ width: '100px' }}/>

        <div>
          <h6>{name}</h6>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard