import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends Component {
  static propTypes = {
    submitUser: PropTypes.func.isRequired
  }
  state = {
  	firstName: '',
    lastName: '',
    username: '',
    games: 0,
    userEntry: {}
  }

  handleChange = (event) => {
  	this.setState({
      [event.target.name]: event.target.value,
      userEntry: 
     	{
         'firstName': this.state.firstName,
         'lastName': this.state.lastName,
         'username': this.state.username,
         'games': this.state.games
   	 	}
    	})
  }

 handleSubmit = (event) => {
   event.preventDefault();
   this.props.submitUser(this.state.userEntry)
   this.clearInputs();
 }

 clearInputs = () => {
 	this.setState(()=> ({
    firstName: '',
    lastName: '',
    username: ''
    }))
 }

 emptyInput = () => {
	return this.state.firstName === '' 
   || this.state.lastName === '' 
   || this.state.username === '';
 }
  render(){
  
    return (
      <form onSubmit={this.handleSubmit}>	
		<input value={this.state.firstName} name='firstName' type='text' placeholder='First Name' onChange={this.handleChange}/>
      <input value={this.state.lastName} name='lastName' type='text' placeholder='Last Name' onChange={this.handleChange}/>
      <input value={this.state.username} name='username' type='text' placeholder='Username' onChange={this.handleChange}/>
      <button disabled={this.emptyInput()}>Add User</button>
	</form>
    )
  }
}

export default AddUserForm