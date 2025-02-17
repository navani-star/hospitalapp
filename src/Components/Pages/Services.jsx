import React from 'react'
import './services.css'
import Cards1 from '../Assets/serv1.jpg'
import Cards2 from '../Assets/heart.jpg'
import Cards3 from '../Assets/serv3.jpg'
import Card4 from '../Assets/serv4.jpg'
import Card5 from '../Assets/serv5.webp'
import Card6 from '../Assets/serv6.jpeg'
import Card7 from '../Assets/serv7.jpg'
import Card8 from '../Assets/serv8.jpg'
const Services = () => {
  return (
    <div>
      <div className='service'>
        <h1 className='service-head mt-3 mb-3'>Our Services</h1>
      </div>

      {/* Cards-1  Dentist*/}
        {/* First row */}
      <div className="d-flex justify-content-around  mb-3">
        <div className='card-1'>
          <div class="card" style={{ width: 300, height: 450 }} >
            <img src={Cards1} class="card-img-top" alt="card1" />
            <div class="card-body">
              <h5 class="card-title">DENTIST</h5>
              <p class="card-text">DENTIST-
                The dental team includes dental assistants, dental hygienists, dental technicians, and sometimes dental therapists.</p>
            </div>
          </div>
        </div>


        {/* Cards 2 -cardiolosit */}
        <div className='card-2'>
          <div class="card" style={{ width: 300, height: 450 }} >
            <img src={Cards2} class="card-img-top" alt="card2" />
            <div class="card-body">
              <h5 class="card-title">CARDIOLOGIST</h5>
              <p class="card-text">CARDIOLOGIST-The heart and blood vessels — including heart rhythm disorders, coronary artery disease, heart attacks.
              </p>
            
            </div>
          </div>
        </div>


        {/* Cards 3 -CHIROPRACTOR */}
        <div className='card-3'>
          <div class="card" style={{ width: 300, height: 450 }} >
            <img src={Cards3} class="card-img-top" alt="card3" />
            <div class="card-body">
              <h5 class="card-title">CHIROPRACTOR</h5>
              <p class="card-text">Chiropractic is a form of alternative medicine concerned with the diagnosis, treatment and prevention of mechanical disorders of the musculoskeletal system.
              </p>
            </div>
          </div>
        </div>

        {/* Cards-4 */}
        <div className='card-4'>
          <div class="card" style={{ width: 300, height: 450 }} >
            <img src={Card4} class="card-img-top" alt="card3" />
            <div class="card-body">
              <h5 class="card-title">PEADIATRIC</h5>
              <p class="card-text">focuses on the health of infants, children, adolescents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className='d-flex justify-content-around mt-3 mb-3 '>
          {/* Cards 5 */}
        <div className='card-5'>
          <div class="card" style={{ width: 300, height: 450 }} >
            <img src={Card5} class="card-img-top" alt="card5" width={250} height={250} />
            <div class="card-body">
              <h5 class="card-title">Gastrology</h5>
              <p class="card-text">A gastroenterologist is a specialist in gastrointestinal diseases.
              </p>
            
            </div>
          </div>
        </div>

        <div className='card-6'>
          <div class="card" style={{ width: 300, height:450 }} >
            <img src={Card6} class="card-img-top" alt="card6"style={{width:300 ,height:250}} />
            <div class="card-body">
              <h5 class="card-title">Orthopedic</h5>
              <p class="card-text">Orthopedist, or orthopedic surgeon, is a medical professional who treats injuries and diseases.
              </p>
              
            </div>
          </div>
        </div>

        <div className='card-7'>
          <div class="card" style={{ width: 300, height:450 }} >
            <img src={Card7} class="card-img-top" alt="card6"style={{width:300 ,height:250}} />
            <div class="card-body">
              <h5 class="card-title">Neurologist</h5>
              <p class="card-text">A neurologist is a doctor who specializes in diagnosing and treating conditions that affect the brain, spinal cord, and nerves. 
              </p>
            
            </div>
          </div>
        </div>

        <div className='card-8'>
          <div class="card" style={{ width: 300, height:450 }} >
            <img src={Card8} class="card-img-top" alt="card6"style={{width:300 ,height:250}} />
            <div class="card-body">
              <h5 class="card-title">Nephrologist</h5>
              <p class="card-text">A nephrologist is a doctor who specializes in the diagnosis and treatment of kidney conditions.
              </p>
             
            </div>
          </div>
        </div>
{/* Cards End */}
      </div>
    </div>
  )
}

export default Services