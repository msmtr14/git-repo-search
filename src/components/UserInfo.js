import _ from 'lodash'
import React from 'react'

const UserInfo = ({ users }) => (
users 
  ? 
<div key={users}> 
    <img src={users[3]} className="user_img_avatar" />
    <br />
    <p className="list-group-item">
       <h4 className="list-group-item-txt">
         UserName: <span>{users[0]}</span> 
           </h4> 
    </p>
</div>
:
<p>---</p>
)

export default UserInfo;
