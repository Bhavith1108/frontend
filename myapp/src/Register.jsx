import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
            event.preventDefault();
            axios.post('http://localhost:8081/register',values)
            .then(res=>{
                console.log(res)
                if(res.status===200){
                    console.log(res.data.Status)
                    navigate("/home")
                }
                else{
                    alert("Error")
                }
            })
            .then(err=>console.log(err));
    }
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="bg-white p-3 rounded w-25">
            <h2 className='text-center'>Sign-Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" name="name" 
                    className="form-control"
                    onChange={e=>setValues({...values,name:e.target.value})}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name="email" 
                    className="form-control"
                    onChange={e=>setValues({...values,email:e.target.value})}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="password" 
                    className="form-control"
                    onChange={e=>setValues({...values,password:e.target.value})}/>
                    
                </div>
                <button type="submit" className='btn btn-success w-100'>Sign Up</button>
                <Link to="/login" className='btn btn-default w-100 bg-light mt-3'>Login</Link>
            </form>
             
        </div>

    </div>
  )
}

export default Register