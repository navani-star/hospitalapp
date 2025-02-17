import React from 'react'
import { NavLink } from 'react-router-dom'
import backdoc from '../Assets/doc-back.png'
import doc1 from '../Assets/doc-1.jpg'
import doc2 from '../Assets/doc2.jpg'
import doc3 from '../Assets/doc-3.jpg'
import doc4 from '../Assets/doc-4.jpg'
import doc5 from '../Assets/doc-5.jpg'
import doc6 from '../Assets/doc-6.jpeg'
import doc7 from '../Assets/doc-7.avif'
import doc8 from '../Assets/doc-8.webp'
const Doctor = () => {
  return (
    <div className='main'>
      <div>
        <img src={backdoc} alt='background' width={1420} height={450} />
      </div>
     
        <div className="d-flex justify-content-around mb-3 mt-3">
          <div className='card-1'>
            <div class="card" style={{ width:300 ,height:450 }} >
              <img src={doc1} class="card-img-top" alt="card1" style={{width:300, height:280}} />
              <div class="card-body">
                <h5 className='text-secondary'>Eliza Blackwell</h5>
                <h5 className='text-dark'>Degree:-BDS,MDS,Dentist</h5>
                <h5 className='text-dark'>Fees:-500RS/-</h5>
             
                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>

          <div className='card-2'>
            <div class="card" style={{ width:300 ,height:450 }} >
              <img src={doc2} class="card-img-top" alt="card1" style={{width:290, height:300}} />
              <div class="card-body">
                <h5 className='text-secondary'>Marie Curie</h5>
                <h5 className='text-dark'>Degree:-MD CARDIOLOGIST</h5>
                <h5 className='text-dark'>Fees:-600RS/-</h5>
                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>

          <div className='card-3'>
            <div className="card" style={{ width:300 ,height:450 }} >
              <img src={doc3} class="card-img-top" alt="card1" style={{width:300, height:280}} />
              <div className="card-body">
                <h5 className='text-secondary'>Virgina Apgar</h5>
                <h5 className='text-dark'>Degree:-DC CHIROPRACTOR</h5>
                <h5 className='text-dark'>Fees:-700RS/-</h5>
                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>

          <div className='card-4'>
            <div class="card" style={{ width:300 ,height:450 }} >
              <img src={doc4} class="card-img-top" alt="card1" style={{width:300, height:300}} />
              <div className="card-body">
                <h5 className='text-secondary'>Gerty Cori</h5>
                <h5 className='text-dark'>MD PEADIATRIC</h5>
                <h5 className='text-dark'>Fees:-500RS/-</h5>
                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-around mb-3 mt-3'>
        <div className='card-5'>
            <div className="card" style={{ width:300 ,height:450 }} >
              <img src={doc5} class="card-img-top" alt="card1" style={{width:300, height:300}} />
              <div className="card-body">

              <h5 className='text-secondary'>Kadam Ganguly</h5>
                <h5 className='text-dark'>MD GASTROLOGY</h5>
                <h5 className='text-dark'>Fees:-600RS/-</h5>

                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>

          <div className='card-6'>
            <div className="card" style={{ width:300 ,height:450 }} >
              <img src={doc6} class="card-img-top" alt="card1" style={{width:300, height:300}} />
              <div className="card-body">
              <h5 className='text-secondary'>Mary Jacob</h5>
                <h5 className='text-dark'>MD ORTHOPEDIC</h5>
                <h5 className='text-dark'>Fees:-700RS/-</h5>
                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>

          <div className='card-7'>
            <div className="card" style={{ width:300 ,height:450 }} >
              <img src={doc7} class="card-img-top" alt="card1" style={{width:300, height:300}} />
              <div className="card-body">
              <h5 className='text-secondary'>Christaiin Nausela</h5>
                <h5 className='text-dark'>MD NEUROLOGIST</h5>
                <h5 className='text-dark'>Fees:-500RS/-</h5>
                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>

          <div className='card-8'>
            <div className="card" style={{ width:300 ,height:450 }} >
              <img src={doc8} class="card-img-top" alt="card1" style={{width:300, height:280}} />
              <div className="card-body">
              <h5 className='text-secondary'>Jorge Henry</h5>
                <h5 className='text-dark'>MD NEPHROLOGIST</h5>
                <h5 className='text-dark'>Fees:-600RS/-</h5>
                <NavLink to='/appoinment' className='btn btn-danger'>Book Appoinement</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Doctor