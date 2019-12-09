import React, { Component } from 'react';
import './App.css'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
   username: "Jean-Claude",
    otherState: "Some other value"
  }
  inputUsernameHandler = (e) => {
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.inputUsernameHandler} currentUser={this.state.username}/>
        <UserOutput
          username={this.state.username}
          changed={this.inputUsernameHandler}/>

        <UserOutput username="Batman" />



      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
