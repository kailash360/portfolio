import React from 'react'
import styles from '../../styles/Experience.module.css'
import Card from './Card/Card'

function Experience() {

    const experience = [{
        company:"InfuzeX Ventures",
        role:"Full Stack Developer",
        from:"August 2021",
        to:"Present",
        activities:["Lorem Ipsum", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor"]
    }]

    return (
        <div className={styles.experience}>
            <h4>Work Experience</h4>
            <h1>Companies that I have worked for</h1>
            <div className={styles.experience_cards_section}>
            {experience.map((job,index) => 
                <Card
                    index={index+1}
                    company={job.company}
                    role={job.role}
                    from={job.from}
                    to={job.to}
                    activities={job.activities}
                />
            )}
            </div>
        </div>
    )
}

export default Experience