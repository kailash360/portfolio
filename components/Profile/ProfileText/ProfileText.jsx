import React from 'react'
import styles from '../../../styles/Profile.module.css'
import Role from './Role/Role'

function ProfileText() {
    return (
        <div className={styles.profileText}>
            <h1>Hello</h1>
            <h2>I’m Kailash, <br/>
                A <Role/> <br/>
            </h2>
            <p>
                I am very passionate about Web Development and love to build scalable applications. 
                <br/>Although I expertize the full-stack development, I prefer to work on the backend of any application.
                <br/> I am also interested in Blockchain development, and have created several DApps by myself.
            </p>
        </div>
    )
}

export default ProfileText