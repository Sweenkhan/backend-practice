import React,{useState} from 'react'
import axios from "axios"


function Register() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

  let ujwal = "hai"
    function handleSubmit(e){
      e.preventDefault();

      // console.log(name, password)
        axios.post("http://localhost:8000/sendData", {name, password})
        .then((result) =>{
            console.log(result)
        })
    }


  return (
    <div> 
    <h1>THis Register</h1>

    <form onSubmit={handleSubmit}>
     <input type='text' value={name} placeholder='enter your name' onChange={(e) => {setName(e.target.value)}}/>
     <input type='password' value={password} placeholder='enter your password' onChange={(e) => {setPassword(e.target.value)}}/>
     
     <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default Register