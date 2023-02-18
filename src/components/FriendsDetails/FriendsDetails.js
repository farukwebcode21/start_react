import React from 'react'
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
  const friend = useLoaderData();
  return (
    <div>
      <h1>Friend Details</h1>
      <h3>Name :{friend.name}</h3>
      <h4>Email :{friend.email}</h4>
      <p>Phone:{friend.phone}</p>
      <h5>Website:{friend.website}</h5>
      <p>company:{friend.company.name}</p>
    </div>
  )
}

export default FriendsDetails;