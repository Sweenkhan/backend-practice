import React,{useState} from 'react'
import axios from "axios"


function Register() {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

 
    function handleSubmit(e){
      e.preventDefault();

        axios.post("http://localhost:8000/register", {name, username, password})
        .then((result) =>{
            console.log(result)
        })
    }


  return (
    <div> 
    <h1>THis is Register Page.</h1>

    <form onSubmit={handleSubmit}>
     <input type='text' value={name} placeholder='enter your name' onChange={(e) => {setName(e.target.value)}}/>
     <input type='text' value={username} placeholder='enter your username' onChange={(e) => {setUsername(e.target.value)}}/>
     <input type='password' value={password} placeholder='enter your password' onChange={(e) => {setPassword(e.target.value)}}/>
     
     <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default Register