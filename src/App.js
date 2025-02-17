import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Doctor from './Components/Pages/Doctor';
import Faq from './Components/Pages/Faq';
import Testimonial from './Components/Pages/Testimonial';
import Appoinment from './Components/Pages/Appoinment';
import Footer from './Components/Layout/Footer';
import Patientdata from './Components/Pages/Patientdata';
import Admin from './Components/Pages/Admin';
import Update from './Components/Pages/Update';
import Delete from './Components/Pages/Delete';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/doctor' element={<Doctor/>}/>
         <Route path='/appoinment' element={<Appoinment/>}/>
         <Route path='/faq' element={<Faq/>}/>
         <Route path='/testimonial' element={<Testimonial/>}/>
         <Route path='/show' element={<Patientdata/>}/>
         <Route path='/admin'element={<Admin/>}/>
         <Route path='/update/:patientId' element={<Update/>}/>
         <Route path='/delete/:patientId' element={<Delete/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
    </div>
  );
}
export default App;
