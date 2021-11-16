import React from 'react'
import styles from '../../../styles/Experience.module.css'

function ExperienceCard({key,index,role,company,from,to,activities}) {
    return (
        <div className={styles.experienceCard}>
            <p className={styles.card_number}>{index<10?("0"+index):index}</p>
            <h2 className={styles.role}>{role}</h2>
            <h3 className={styles.company}>{company}</h3>
            <h4 className={styles.duration}>{from + "-" + to}</h4>
            <h4>What I did?</h4>
            <ul className={styles.activities}>
                {activities.map(activity=> <li>{activity}</li>)}
            </ul>
        </div>
    )
}

export default ExperienceCard