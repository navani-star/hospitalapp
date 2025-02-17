import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useState} from 'react'
import Form_pic from '../Assets/form-1.webp'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const {register, handleSubmit,setValue} = useForm()
  const [doct, setDoct] = useState([])
  const [special, setSpecial] = useState('')
  const [pay, setPay] = useState('')

    const doctors = [
      {name:"Eliza Blackwell",speciality:"DENTIST",fees:"500"},
      {name:"Marie Curie", speciality:"CARDIOLOGIST",fees:"600"},
      {name:"Virgina Apgar", speciality:"CHIROPRACTOR",fees:"700"},
      {name:"Gerty Cori", speciality:"PEADIATRIC",fees:"500"},
      {name:"Kadam Ganguly", speciality:"GASTROLOGY",fees:"600"},
      {name:"Mary Jacob", speciality:"ORTHOPEDIC",fees:"700"},
      {name:"Christaiin Nussela", speciality:"NEUROLOGIST",fees:"500"},
      {name:"Jorge Henry", speciality:"Nephrologist",fees:"600"}
    ]
  
    const doctorHandler = (event) => {
      const docname = event.target.value
      setDoct(docname)
      setValue("name",docname)
     
      const doctor = doctors.find((d) => d.name === docname)
      if (doctor) {
        setSpecial(doctor.speciality)
        setPay(doctor.fees)

        setValue("speciality", doctor.speciality); // Update Form Data
        setValue("fees", doctor.fees);
  
      } else {
        setSpecial('')
        setPay('')

      }
  
    }

    const {patientId} = useParams();

    //fetch data specific id /:patientID
    const getdata= async()=>{
      const result= await axios.get(`http://localhost:8000/patient/${patientId}`)
      const data=result.data

      Object.keys(data).forEach((key) => setValue(key, data[key]));

      setDoct(data.name);
      setSpecial(data.speciality);
      setPay(data.fees);

      setValue('finame',data.finame)
      setValue('Lname',data.Lname)
      setValue('Mname',data.Mname)
      setValue('fname',data.fname)
      setValue('address',data.address)
      setValue('gender',data.gender)
      setValue('name',data.name)
      setValue('speciality',data.speciality)
      setValue('fees',data.fees)
      setValue('date',data.date)
      setValue('dob',data.dob)
      setValue('pincode',data.pincode)
      setValue('email',data.email)
      setValue('number',data.number)

    }
    useEffect(()=>{
     getdata()
    },[])

    //update data using PUT method
    //when data is update the admin redirect on /patientdata comp
    const navigate = useNavigate();

   const updatedata= async(data)=>{
        await axios.put(`http://localhost:8000/update/${patientId}`,data)
        alert('Data Updated')
        navigate('/show')
    }
  return (
    <div>
      <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src={Form_pic}
                    alt="Sample" className="img-fluid abc" />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase text-center">Patient registration form</h3>

                    <form onSubmit={handleSubmit(updatedata)}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg"
                              {...register('finame')} />
                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg"
                              {...register('Lname')} />
                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1m1" className="form-control form-control-lg"
                              {...register('Mname')} />
                            <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1n1" className="form-control form-control-lg"
                              {...register('fname')} />
                            <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                          </div>
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg"
                          {...register('address')} />
                        <label className="form-label" htmlFor="form3Example8">Address</label>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="female"  {...register('gender')} />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="male" {...register('gender')} />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="other"  {...register('gender')} />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-14 mb-4">

                        <select className="W-100 form-control" {...register("name")} onChange={doctorHandler} value={doct}>
                            <option value="">Select Doctor</option>
                            {
                              doctors.map((d) => (
                                <option key={d.name} value={d.name}>
                                  {d.name}
                                </option>
                              ))
                            }
                          </select>
                        </div>

                        <div className="col-14 mb-4">
                          <input type='text'
                            placeholder='select speciality'
                            className='form-control'
                            value={special}
                          />
                          <input type="hidden" {...register("speciality")} value={special}/>
                        </div>

                        <div className="col-md-14 mb-4">
                          <input type='text'
                            className='form-control'
                            placeholder='Enter A Fees'
                            value={pay}
                          />
                          <input type='hidden' {...register("fees")} value={pay}/>
                        </div>

                      </div>

                      <div className="col-md-14 mb-4">
                        <input
                          type="date"
                          className="form-control"
                          id="appointmentDate"
                          {...register('date')}
                        />
                        <label htmlFor="appointmentDate" className="form-label">
                          Appointment Date
                        </label>
                      </div>



                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg"
                          {...register('dob')} />
                        <label className="form-label" htmlFor="form3Example9">DOB</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example90" className="form-control form-control-lg"
                          {...register('pincode')} />
                        <label className="form-label" htmlFor="form3Example90">Pincode</label>
                      </div>



                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example97" className="form-control form-control-lg"
                          {...register('email')} />
                        <label className="form-label" htmlFor="form3Example97">Email ID</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example97" className="form-control form-control-lg"
                          {...register('number')} />
                        <label className="form-label" htmlFor="form3Example97">Mobile Number</label>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Update Form</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div >
  )
}
export default Update