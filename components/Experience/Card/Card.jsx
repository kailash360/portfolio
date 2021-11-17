import React from 'react'
import styles from '../../../styles/Experience.module.css'

function Card({key,index,role,company,from,to,color}) {
    return (
        <div className={styles.experienceCard}>
            <p className={styles.card_number} style={{color:color}} >{index<10?("0"+index):index}</p>
            <h2 className={styles.role}> <i className="far fa-user fa-sm"></i> {role}</h2>
            <h3 className={styles.company}><i className="far fa-building fa-md"></i>  {company}</h3>
            <p className={styles.duration}><i class="far fa-calendar fa-md"></i> {from + "-" + to}</p>
        </div>
    )
}

export default Card