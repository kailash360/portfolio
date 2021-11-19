import React from 'react'
import styles from '../../../styles/Profile.module.css'
import Role from './Role/Role'

function ProfileText() {
    return (
        <div className={styles.profileText}>
            <h1>Hello</h1>
            <h2 style={{marginBlockEnd:"5rem"}} >I’m Kailash, <br/>
                A <Role/> <br/>
            </h2>
            <a href = "https://drive.google.com/file/d/1ET4CmL3sm232Q_weWfdT6CR2SGzH7dEr/view?usp=sharing" target="_blank" without rel="noreferrer" className={styles.a} >Download CV &nbsp; <i className="fas fa-cloud-download-alt fa-md"></i></a>
        </div>
    )
}

export default ProfileText