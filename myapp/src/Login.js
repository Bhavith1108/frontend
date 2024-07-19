import React from 'react'
import {Link} from "react-router-dom"


const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="bg-white p-3 rounded w-25">
            <h2 className='text-center'>Sign-In</h2>
            <form>
                
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name="email" 
                    className="form-control"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="password" 
                    className="form-control"/>
                    
                </div>
                <Link to ="/home" type="submit" className='btn btn-success w-100'>Login</Link>
                <Link to="/register" className='btn btn-default border w-100 bg-light mt-3'>Create account</Link>
            </form>
            
        </div>

    </div>
  )
}

export default Login