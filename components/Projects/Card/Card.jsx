import styles from '../../../styles/Projects.module.css';
import Image from 'next/image'

function Card({key,index,name,description,image,github,hosted,host_link}) {
    
    return (
        <div className={styles.card} style={{flexDirection:index%2?'row':'row-reverse'}}>
            <div className={styles.left}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={styles.button_section}>
                    <a href={github} target="_blank" without rel="noreferrer" >Source Code</a>
                    <a href={host_link} target="_blank" without rel="noreferrer"  style={{display:hosted?'block':'none'}}>See Live</a>
                </div>
            </div>
            <div className={styles.right}>
                <Image src={image} height={300} width={500} />
            </div>
        </div>
    )
}

export default Card
