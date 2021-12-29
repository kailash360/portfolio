import React from 'react'
import styles from'../../styles/Skills.module.css'
const {Icons} = require('../../data/Icons.js')

function Skills() {

    const IconItem = (props) => 
    <div className={styles.skill_item}>  
        {React.createElement(props.icon,props.options)}
        <div className={styles.skill_description}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    </div>

    return (
        <div className={styles.skills} id="skills">
            <div className={styles.skillset_content}>
                <h1>Skillset</h1>
                <p> I love to learn new technologies, and this has helped to dive deep into  different fields and master the skills of developing agile and scalable applications.
                </p>
            </div>
            <div className={styles.skill_icons_section}>
                {Icons.map((language,index)=> 
                    language.icon && 
                    <IconItem  
                        key={index}
                        icon={language.icon}
                        options={language.options}
                        name={language.name}
                        description={language.description}
                    ></IconItem>)
                }
                {/* {Icons.map(language=> language.icon && React.createElement(language.icon,language.options))} */}
            </div>
        </div>
    )
}

export default Skills