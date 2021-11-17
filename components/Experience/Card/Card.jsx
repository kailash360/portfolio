import React from 'react'
import styles from '../../../styles/Experience.module.css'
import Image from 'next/image'

function Card({key,role,company,from,to,color,logo}) {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.cover_section} style={{background: color}} >
                <h3>{company}</h3>
                <div className={styles.company_logo} style={{backgroundImage:`url(${logo})` }} ></div>
            </div>
            <div className={styles.information_section}>
                <h2 className={styles.role}>{role}</h2>
                <p className={styles.duration}><i className="far fa-calendar fa-md"></i> {from + " - " + to}</p>
                <p className={styles.activities}>Developed a scalable ed-tech platform <br/>using NodeJS, Express, MongoDB in the backend,</p> and ReactJS in the frontend.
            </div>
        </div>
    )
}

export default Card