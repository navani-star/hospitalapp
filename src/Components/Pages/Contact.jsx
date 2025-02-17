import React from 'react'
const Contact = () => {
  return (
    <div className="container">
    <h1 className="text-center mb-4">Contact Us</h1>
    <form>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-md-6">
          <label htmlFor="selectDoctor" className="form-label">
            Select Doctor
          </label>
          <select className="form-select" id="selectDoctor">
            <option value="" disabled selected>
              Select Doctor
            </option>
            <option>Virat Kohli</option>
            <option>Rohit Sharma</option>
            <option>Rahul Dravid</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="XXXXXXXXX23"
          />
        </div>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-md-6">
          <label htmlFor="appointmentDate" className="form-label">
            Appointment Date
          </label>
          <input
            type="date"
            className="form-control"
            id="appointmentDate"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
      </div>
      <div className="mt-3">
        <label className="form-label d-block">Gender</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="Male"
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="Female"
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="preferNotToSay"
            value="Prefer not to say"
          />
          <label className="form-check-label" htmlFor="preferNotToSay">
            Prefer not to say
          </label>
        </div>
      </div>
      <div className="mt-3 text-center mx-auto">
        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </div>
    </form>
  </div>
  )
}
export default Contact
