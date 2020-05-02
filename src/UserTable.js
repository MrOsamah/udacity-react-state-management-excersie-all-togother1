import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HideScoreCheckbox from './HideScoreCheckbox';
import UserList from './UserList';

class UserTable extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  state = {
  	hideChecked: false
  }

  triggerHide = (event) => {
  	this.setState(prevState => ({
      hideChecked: !prevState.hideChecked
    }))
  }
  render(){
    
    const {users} = this.props
    
    return(
      <React.Fragment>
        <HideScoreCheckbox hideTrigger={this.triggerHide}/>
        <UserList users={users} hideScore={this.state.hideChecked}/>
      </React.Fragment>
    )
  }
}

export default UserTable