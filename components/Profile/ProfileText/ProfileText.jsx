import React from 'react'
import styles from '../../../styles/Profile.module.css'

function ProfileText() {
    return (
        <div className={styles.profileText}>
            <h1>I’m Kailash, <br/>
                A web developer <br/>
                based in India.
            </h1>
            <p>
                I am very passionate about web development and love to work as a Full Stack developer. I am also interested in Blockchain development.
            </p>
        </div>
    )
}

export default ProfileText