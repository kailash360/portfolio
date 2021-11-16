import styles from '../../styles/Blogs.module.css'
import Card from './Card/Card'

function Blogs(props) {
    
    let blogs = props.blogs
    
    return (
        <div className={styles.blogs}>
            <h2>My blogs</h2>
            <p>I love to write technology-based articles. These are some of the blogs that I have written.</p>
            <div className={styles.blogs_section}>
                {blogs && blogs.map((blog,index)=>
                <Card
                key={index}
                name={blog.title}
                image={blog.thumbnail}
                link={blog.link}
                date = {blog.pubDate}
                />)}
            </div>
        </div>
    )
}

export default Blogs
