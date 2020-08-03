import React from 'react';

import './App.css';
import SignUpForm from './Components/Form';
import User from './Components/User'
//option1: render user component in Form component and render it conditionally. 
//option2: 
//define a userInfo state in app, 
//define showUsers state boolean
//define handlesubmitmethod in App, to update userInfo and pass it as prop in Form Component
//
class App extends React.Component{

constructor(props){
  super(props)
  this.state={
    showUsers: false,
    userInfo: {}
  }
}
handleSubmit = (userInfo) => {
  //alert(` username:${this.state.usename},password:******`)
  // event.preventDefault();
  //Form Checking

   this.setState({showUsers:true})
     this.setState({ userInfo: userInfo })
}

render(){
  return (
    <div className="App">
      <SignUpForm  handleSubmit={this.handleSubmit}/>
      { this.state.showUsers && <User formData={this.state.userInfo} />}
      
      
    </div>
  );
}
}

export default App;
