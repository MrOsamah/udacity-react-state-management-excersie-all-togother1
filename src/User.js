import React from 'react';
import PropTypes from 'prop-types';

function User(props){
    return(
  		<li>{props.userEntity.username} | games played: { props.hideValue === false ? props.userEntity.games : '*'}</li>
    )
}

User.propsTypes = {
  userEntity: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
  hideValue: PropTypes.bool.isRequired
}

export default User