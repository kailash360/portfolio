import React from 'react'
import styles from '../../styles/Experience.module.css'
import Card from './Card/Card'

function Experience() {

    const experience = [{
        company:"InfuzeX Ventures",
        role:"Full Stack Developer",
        from:"August 2021",
        to:"Present",
        color:"linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
        logo:'https://infuzex.in/images/logo/infuzex-logo-tp-2.png'
    }]

    return (
        <div className={styles.experience} name="experience" id="experience">
                <h1>Work Experience</h1>
                <p>These are the companies that I have worked for.</p>
                <div className={styles.experience_cards_section}>
                {experience.map((job,index) => 
                    <Card
                        key={index}
                        index={index+1}
                        company={job.company}
                        role={job.role}
                        from={job.from}
                        to={job.to}
                        color={job.color}
                        logo = {job.logo}
                    />
                )}
                </div>
        </div>
    )
}

export default Experience