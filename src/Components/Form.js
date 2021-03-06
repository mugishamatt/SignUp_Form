
import '../App.css'
import React, { Component } from 'react';
import User from './User'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usename: '',
            password: '',
            age: '',
            location: '',
            gender: 'select',
            ocupation: '',
            showUsers: false,
            userInfo: {}
        }
    }
    //pass userInfo from Form component to App component through state lift up

    handlerUsenameChange = (event) => {
        this.setState({
            usename: event.target.value
        }

        )
    }
    handlerPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        }
        )
    };
    handlerAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    };
    handlerLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }
    handlerGenderChange = (event) => {
        this.setState({
            gender: event.target.value,
        })
    }
    handlerOccupationChange = (event) => {
        this.setState({
            ocupation: event.target.value
        })
    }
    formvalidation() {
      return true
    }

    handleSubmit = (event) => {
        //alert(` username:${this.state.usename},password:******`)
        event.preventDefault();
        //Form Checking
       let isFormValid = this.formvalidation()

        let userInfo = {
            usename: this.state.usename,
            password: this.state.password,
            age: this.state.age,
            location: this.state.location,
            gender: this.state.gender,
            ocupation: this.state.ocupation,
        }
        this.props.handleSubmit(userInfo)
        // isFormValid && this.setState({showUsers:true})
        // isFormValid && this.setState({ userInfo: userInfo })
    }

    render() {
        return (
            <React.Fragment>
                <form className="signup" onSubmit={this.handleSubmit}>
                    <div className='forms'>
                        <h1 className="title"> SIGNUP FORM</h1>
                        <div className="username">
                            <div>
                                <label> User Name</label>
                            </div>
                            <div >
                                <input className='text' type="text" value={this.state.usename}
                                    onChange={this.handlerUsenameChange} />
                            </div>
                        </div>
                        <div>
                            <label> password</label>
                        </div>
                        <div className='psd'>
                            <input className='text' type='password' value={this.state.password}
                                onChange={this.handlerPasswordChange} />
                        </div>

                        <div className="age">
                            <div>
                                <label> Age</label>
                            </div>
                            <div >
                                <input name="age" className='text' type="text" value={this.state.age}
                                    onChange={this.handlerAgeChange} />
                            </div>
                        </div>

                        <div className="location">
                            <div>
                                <label> location </label>
                            </div>
                            <div >
                                <input className='text' type="text" value={this.state.location}
                                    onChange={this.handlerLocationChange} />
                            </div>
                        </div>

                        <div className="occupation">
                            <div>
                                <label> Occupation </label>
                            </div>
                            <div >
                                <input className='text' type="text" value={this.state.ocupation}
                                    onChange={this.handlerOccupationChange} />
                            </div>
                        </div>

                        <div className="select">

                            <div> <label className="text">select gender</label></div>
                            <select id="selectbtn" onChange={this.handlerGenderChange} value={this.state.gender}>
                                <option value="select"> select</option>
                                <option value="female"> female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <div >
                            </div>
                        </div>

                        <div className="submitbtn">
                            <button className='subbtn' type="submit"> Sign Up</button>
                        </div>
                    </div>
                </form>
                {/* {this.state.showUsers && <User formData={this.state.userInfo} />} */}
            </React.Fragment>
        );
    }
}

export default SignUpForm;