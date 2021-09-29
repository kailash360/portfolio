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
                <li><a href="#" className="sections">Profile</a></li>
                <li><a href="#" className="sections">About Me</a></li>
                <li><a href="#" className="sections">Skills</a></li>
                <li><a href="#" className="sections">Projects</a></li>
                <li><a href="#" className="sections">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
