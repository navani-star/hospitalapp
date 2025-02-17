import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='main mb-1'>
        <div className='bg-dark'>
            <div className='d-flex'>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29816.481807447955!2d74.70878437431638!3d20.909896500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec58fdcf1ba71%3A0x70b0414ac4c7f6aa!2sShree%20Vighnaharta%20Superspeciality%20Hospital!5e0!3m2!1sen!2sin!4v1738826066211!5m2!1sen!2sin" width={600} height={450} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Vighnaharta' style={{ padding: '15px', margin: '15px'}}>
                    </iframe>
                </div>
                <div className='mt-5 mx-auto'>
                    <span className='head'>☤ Welcome To Vighnaharta Hospital</span>
                    <div className='mt-3 '>
                       <h2 className='text-info'>Monday-Friday-OPENED</h2>
                        <h2 className='text-info'>⏰08:00am-08:00pm</h2>

                      <h2 className='text-success'>Saturday and Sunday-CLOSED</h2>  

                       <h2 className='text-warning'><span>&#128222;</span> +0800 2336 7811</h2> 

                       <h2 className='text-light'><span>&#128231;</span> office@medicare.com</h2> 

                      <h2 className='text-danger'><span></span> Nahata Nagar, Nakane Rd,</h2>
                      <h2 className='text-danger'> Dhule, Maharashtra 424002</h2>

                     <h2 className='text-light'>Emergency Service Avialable 24 Hours...</h2>
                      
                    </div>
                </div>
            </div>
        </div>
     </div>

    )
}

export default Footer