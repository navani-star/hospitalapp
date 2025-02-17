import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
const Patientdata = () => {
    const [show,setshow] =useState([])
    const fetchData= async()=>{
        const response= await axios.get('http://localhost:8000/patient')
        console.log(response)

        const result= await response.data
        console.log(result)
        setshow(result)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const navigate=useNavigate()
    const logoutHandler=()=>{
        navigate('/admin')
        alert('Log Out successfully')
    }
  return (
    <div>
     <h1 className='text-center text-warning bg-dark m-0'>Patient Data</h1>    
     <table className='table border'>
        <thead className='table border'>
            <th>ID</th>
            <th>F Name</th>
            <th>L Name</th>
            <th>M Name</th>
            <th>F Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Doct Name</th>
            <th>Speciality</th>
            <th>Fees</th>
            <th>Appoin Date</th>
            <th>DOB</th>
            <th>Pincode</th>
            <th>Email</th>
            <th>Number</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                show.map((patient,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{patient.finame}</td>
                            <td>{patient.Lname}</td>
                            <td>{patient.Mname}</td>
                            <td>{patient.fname}</td>
                            <td>{patient.address}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.name}</td>
                            <td>{patient.speciality}</td>
                            <td>{patient.fees}</td>
                            <td className='text-success'>{patient.date}</td>
                            <td>{patient.dob}</td>
                            <td>{patient.pincode}</td>
                            <td>{patient.email}</td>
                            <td>{patient.number}</td>
                            <td>
                               <NavLink to={`/update/${patient._id}`}><button className='btn btn-success'>Edit</button></NavLink>
                               <NavLink to={`/delete/${patient._id}`}><button className='btn btn-danger ms-1 mt-1'>Delete</button></NavLink>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
     </table>
     <div className='mb-2 mt-2  text-center'>
        <button className='btn btn-warning w-25 p-3' onClick={logoutHandler}>LOGOUT</button>
     </div>
    </div>
  )
}
export default Patientdata