import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './AddUserForm'
import UserTable from './UserTable';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
  	userList: [],
    message: ''
  }
 addUser = (userEntry) => {
   if(this.state.userList.filter((entity) => {return entity.username === userEntry.username}).length > 0) {
     this.setState({
       message: 'Entered username is already exist!'
     })
   } else {
     this.setState(previousState => ({
     	userList: [...previousState.userList, userEntry],
        message: `${userEntry.username} has been added!`
     }))
   }
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<AddUserForm submitUser={this.addUser}/>
		<span>{this.state.message}</span>
		<UserTable users={this.state.userList}/>
      </div>
    );
  }
}

export default App;
