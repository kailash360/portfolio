import styles from '../../styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.nav} >
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
