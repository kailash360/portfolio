import styles from '../../../styles/Blogs.module.css'

function Card({key,name,image,link,date}) {
    return (
        <a className={styles.card} href={link} >
            <div className={styles.image_container} style={{backgroundImage:`url(${image})`}}>
                {/* <img src={image} /> <---- Image was denied from the source in this method, so I had to set the bg-image property */}
            </div>
            <div className={styles.text_container}>
                <h3>{name}</h3>
                <p>{date.split(' ')[0]}</p>
            </div>
        </a>
    )
}

export default Card
