import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function UserList(props) {
    return(
      <ol>
      {props.users.map( user => (
        <User userEntity={user} key={user.username} hideValue={props.hideScore}/>
       ))}
      </ol>
    )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  hideScore: PropTypes.bool.isRequired
}

export default UserList