import React from 'react'

//object destruction
const User = ({formData})=>{
    console.log("in user",formData)
return(
    <React.Fragment>
        <h1>User Info</h1>
    <div> userName:{formData.usename}</div>
    <div>Age:{formData.age}</div>
    <div> gender:{formData.gender}</div>
    <div> Location:{formData.location}</div>
    <div>:Occupation:{formData.ocupation}</div>
    </React.Fragment>
)
}

export default User


