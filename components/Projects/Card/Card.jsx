import styles from '../../../styles/Projects.module.css';

function Card({index,name,description,image,github,hosted,host_link}) {
    console.log(index)
    return (
        <div className={styles.card} style={{flexDirection:index%2?'row':'row-reverse'}}>
            <div className={styles.left}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={styles.button_section}>
                    <a href={github} target="_blank">Source Code</a>
                    <a href={host_link} target="_blank" style={{display:hosted?'block':'none'}}>See Live</a>
                </div>
            </div>
            <div className={styles.right}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Card
