import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
  const [user,setuser]=useState('')
  const [pass,setpass]=useState('')
  const navigate =useNavigate()
 
   const loginHandler=()=>{

    if(user==='ADMIN' && pass==='ADMIN@123'){
      alert('LOG IN SUCESS')
      navigate('/show')
    }else{
      alert('CHECK USERNAME OR PASSWORD')
    }
   }

  return (
    <div className='bg-secondary m-0 p-0  p-3'>
      <div className='bg-light w-50 mx-auto p-3 mt-3 mb-3 rounded-3'>
        <h1 className='text-center text-dark mb-3'>Welcome To Admin</h1>

        <div className='mb-3'>
          <input type='text'
            className='form-control p-2'
            placeholder='Enter A Username'
            value={user}
            onChange={(e)=>setuser(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <input type='password'
            className='form-control p-2'
            placeholder='Enter A Password'
            value={pass}
            onChange={(e)=>setpass(e.target.value)}
          />
        </div>
        <div className='text-center'>
          <button className='btn btn-success w-50 p-3' onClick={loginHandler}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}
export default Admin