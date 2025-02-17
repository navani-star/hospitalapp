import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"

const Delete = () => {
    const [patient,setpatient]=useState({})
    const {patientId} = useParams()
    const navigate = useNavigate()

    const getData =async ()=>{
        const response = await axios.get(`http://localhost:8000/patient/${patientId}`)
        console.log(response)

        const result=response.data
        setpatient(result)


    }

    useEffect(()=>{
        getData()
    },[])

    const deleteData=()=>{
         axios.delete(`http://localhost:8000/delete/${patientId}`)
         alert('Data Deleted')
         navigate('/show')
    }
       
  return (
    <div>
        <h1 className='text-danger text-center mt-2 mb-2'>Delete Patient Appoinment:-</h1>
        <div className='mx-auto mt-3 mb-3 bg-warning w-50 rounded-5 p-3'>
            <div className='text-center'>
               <h2>Patient ID:- {patient._id}</h2>
            </div>
            <div className='text-center'>
                <h2>Patient Name:- {patient.finame} {patient.Lname}</h2>
            </div>
            <div className='text-center'>
                <h2>Doctor Name:-{patient.name} </h2>
            </div>
            <div className='text-center'>
                <h2>Patient Email:-{patient.email}</h2>
            </div>
            <div className='text-center'>
                <h2>Patient Number:-{patient.number}</h2>
            </div>
            <div className="text-center mt-2">
               <button className="btn btn-danger me-3 p-2" onClick={deleteData}>YES</button>
               <NavLink to={'/show'}><button className="btn btn-success p-2">No</button></NavLink>
            </div>
        </div>
    </div>
  )
}
export default Delete