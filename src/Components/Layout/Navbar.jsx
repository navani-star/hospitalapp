import { NavLink } from "react-router-dom"
import './layout.css'
import logo from '../Assets/Logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-main">
                <div className="container-fluid">
                    <img src={logo} alt="logo" width={100} height={60} style={{borderRadius:'10px'}}/>
                    <div className="list" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/contact">Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/services">Services</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/doctor">Doctor</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/appoinment">Appoinment</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/admin">Admin</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/faq">FAQ</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-css  me-5" aria-current="page" to="/testimonial">Testimonial</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar