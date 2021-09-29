import React from 'react'
import './Navbar.css'

function Navbar() {
    
    return (
        <nav id="nav" >
            <span>
                <p>
                    Kailash Kejriwal
                </p>
            </span>
            <ul>
                <li><i className="fas fa-user"></i>&nbsp;&nbsp; <a href="#" className="sections">Profile</a></li>
                <li><i className="fas fa-info-circle"></i>&nbsp;&nbsp; <a href="#" className="sections">About Me</a></li>
                <li><i className="fas fa-tools"></i>&nbsp;&nbsp; <a href="#" className="sections">Skills</a></li>
                <li><i className="fas fa-tasks"></i>&nbsp;&nbsp; <a href="#" className="sections">Projects</a></li>
                <li><i className="fas fa-envelope"></i>&nbsp;&nbsp; <a href="#" className="sections">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
