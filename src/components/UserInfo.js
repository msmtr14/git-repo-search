import _ from 'lodash'
import React from 'react'

const UserInfo = ({ users }) => (
  _.map(users, user => (

<div key={user.i}> 
    <img src={user.avatar_url} />
</div>
))
)

export default UserInfo;
