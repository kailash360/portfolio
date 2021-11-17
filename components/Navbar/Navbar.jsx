import styles from '../../styles/Navbar.module.css';
import smoothScroll from '../../utils/smoothScroll.js'

function Navbar({handleScroll}) {    

    //function for smooth scroll
    function linkClicked(e) {
        e.preventDefault();

        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;

        window.scrollTo(scrollX, scrollY);
        return smoothScroll(e.target.title)
    }

    return (
        <nav className={styles.nav} >
            <span>
                <p>
                𝓚𝓪𝓲𝓵𝓪𝓼𝓱 𝓚𝓮𝓳𝓻𝓲𝔀𝓪𝓵
                </p>
            </span>
            <ul>
                <li><a className="sections">About Me</a></li>
                <li><a onClick={linkClicked} title="/#skills" className="sections">Skills</a></li>
                <li><a onClick={linkClicked} title="/#experience" className="sections">Experience</a></li>
                <li><a onClick={linkClicked} title="/#projects" className="sections">Projects</a></li>
                <li><a onClick={linkClicked} title="/#blogs" className="sections">Blogs</a></li>
                <li><a onClick={linkClicked} title="/#contact" className="sections">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
