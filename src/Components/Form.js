
import '../App.css'
import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props){
    super(props)
    this.state={
        usename:'',
        password:'',
        age:'',
        location:'',
        gender:'select',
        ocupation:'',
        submit:''
    }
    }
    handlerUsenameChange=(event)=>{
        this.setState({
            usename:event.target .value
        }

        )
    }
    handlerPasswordChange=(event)=>{
        this.setState({
            password:event.target.value
        }
        )
    };
    handlerAgeChange=(event)=>{
        this.setState({
            age:event.target.value
        })
    };
    handlerLocationChange=(event)=>{
        this.setState({
            location:event.target.value
        })
    }
    handlerGenderChange=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }
        handlerOccupationChange=(event)=>{
            this.setState({
                ocupation:event.target.value
            })
        }
 
    handleSubmit=(event)=>{
        alert(` username:${this.state.usename},password:******`)
      
        event.preventDefault()
        
        }

    render() { 
        return (  
           
            <form className="signup" onSubmit={this.handleSubmit}>
                <div className='forms'> 
                    <h1 className="title"> SIGNUP FORM</h1>
                    <div className="username">
                   <div>
                       <label> User Name</label>
                   </div>
                   <div >
                   <input className='text' type="text" value={this.state.usename}
                    onChange={this.handlerUsenameChange}/>
                   </div>
                   </div>
                   <div>
                   <label> password</label>
                   </div>
                    <div className='psd'>
                    <input  className='text' type='password' value={this.state.password}
                    onChange={this.handlerPasswordChange}/>
                    </div>

                    <div className="age">
                   <div>
                       <label> Age</label>
                   </div>
                   <div >
                   <input className='text' type="text" value={this.state.age}
                    onChange={this.handlerAgeChange}/>
                   </div>
                   </div>
                  
                   <div className="location">
                   <div>
                       <label> location </label>
                   </div>
                   <div >
                   <input className='text' type="text" value={this.state.location}
                    onChange={this.handlerLocationChange}/>
                   </div>
                   </div>

                   <div className="occupation">
                   <div>
                       <label> Occupation </label>
                   </div>
                   <div >
                   <input className='text' type="text" value={this.state.ocupation}
                    onChange={this.handlerOccupationChange}/>
                   </div>
                   </div>

                   <div className="select">
                       
                        <div> <label className="text">select gender</label></div>
                        <select id="selectbtn" onChange={this.handlerGenderChange} value={this.state.gender}>
                         <option value= "select"> select</option>
                        <option value= "female"> female</option>
                        <option value="male">male</option>
                         <option value="other">other</option>
                       </select>
                       <div >
                   </div>
                   </div>

                    <div className="submitbtn">
                        <button  className='subbtn'type="submit"> Sign Up</button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default SignUpForm ;