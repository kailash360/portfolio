import styles from'../../styles/Skills.module.css'

function Skills() {

    const icons = []

    return (
        <div className={styles.skills} id="skills">
            <div className={styles.skillset_content}>
                <h1>Skillset</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias sunt voluptate nemo laborum cum qui labore a adipisci! Officia sunt, ut eos possimus, itaque dicta numquam repellendus incidunt hic libero repellat? Dolor, explicabo hic officia earum incidunt voluptates quas omnis nam ex id possimus velit? Ipsa atque tempore dignissimos?
                </p>
            </div>
            <div className={styles.skill_icons_section}>
                {icons.map(language=>language)}
            </div>
        </div>
    )
}

export default Skills