import styles from'../../styles/Skills.module.css'

function Skills() {

    const icons = []

    return (
        <div className={styles.skills} id="skills">
            <div className={styles.skillset_content}>
                <h1>Skillset</h1>
                <p> I love to learn new technologies and this has helped to dive deep into  different fields and master the skills of developing agile and scalable applications.
                </p>
            </div>
            <div className={styles.skill_icons_section}>
                {icons.map(language=>language)}
            </div>
        </div>
    )
}

export default Skills