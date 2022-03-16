import React from 'react'
import styles from '../../styles/Experience.module.css'
import Card from './Card/Card'
import {ExperienceList} from "../../data/Experience"

function Experience() {

    return (
        <div className={styles.experience} name="experience" id="experience">
                <h1>Work Experience</h1>
                <p>These are the companies that I have worked for.</p>
                <div className={styles.experience_cards_section}>
                {ExperienceList.map((job,index) => 
                    <Card
                        key={index}
                        index={index+1}
                        company={job.company}
                        role={job.role}
                        from={job.from}
                        to={job.to}
                        color={job.color}
                        logo = {job.logo}
                        activities={job.activities}
                    />
                )}
                </div>
        </div>
    )
}

export default Experience