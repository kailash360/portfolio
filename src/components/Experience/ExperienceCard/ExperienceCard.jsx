import React from 'react'
import './ExperienceCard.css'

function ExperienceCard({index,role,company,from,to,activities}) {
    return (
        <div className="experienceCard">
            <p className="card_number">{index<10?("0"+index):index}</p>
            <h2 className="role">{role}</h2>
            <h3 className="company">{company}</h3>
            <h4 className="duration">{from + "-" + to}</h4>
            <h4>What I did?</h4>
            <ul className="activities">
                {activities.map(activity=> <li>{activity}</li>)}
            </ul>
        </div>
    )
}

export default ExperienceCard
