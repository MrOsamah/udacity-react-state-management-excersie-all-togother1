import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HideScoreCheckbox extends Component {
  static propTypes = {
    hideTrigger: PropTypes.func.isRequired
  }

  state = {
    value: false
  }

  handleClick = (event) => {
    this.setState((prevState) => ({
      value: !prevState.value
    }), this.props.hideTrigger(this.state.value))
  }
  render(){
    return (
        <div>
         {this.state.value === false ? <span>Hide the Number of Games Played</span> : <span>Show the Number of Games Played</span>} 
        <input checked={this.state.value} type='checkbox' onClick={this.handleClick}/>
        </div>
      )
  }
}

export default HideScoreCheckbox