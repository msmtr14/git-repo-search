import _ from 'lodash'
import React from 'react'

const UserInfo = ({ users }) => (
(users[0] !== null || users[0] !== undefined) ? 
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
null
)

export default UserInfo;
