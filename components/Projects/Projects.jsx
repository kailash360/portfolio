import Card from './Card/Card'
import styles from '../../styles/Projects.module.css'

function Projects() {

    const projects =[
    {
        name:'Snap Stock',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae officia adipisci. Impedit ipsa dignissimos dolorem omnis id reiciendis quidem non velit consequatur vel pariatur maiores quos, iste expedita est.',
        image: '/Projects/sample.jfif',
        github: 'https://github.com/kailash360/Snap-Stock',
        hosted: false,
        host_link: 'https://github.com/kailash360/Snap-Stock'
    },
    {
        name:'Snap Stock',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae officia adipisci. Impedit ipsa dignissimos dolorem omnis id reiciendis quidem non velit consequatur vel pariatur maiores quos, iste expedita est.',
        image: '/Projects/sample.jfif',
        github: 'https://github.com/kailash360/Snap-Stock',
        hosted: true,
        host_link: 'https://github.com/kailash360/Snap-Stock'
    },
    {
        name:'Snap Stock',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae officia adipisci. Impedit ipsa dignissimos dolorem omnis id reiciendis quidem non velit consequatur vel pariatur maiores quos, iste expedita est.',
        image: '/Projects/sample.jfif',
        github: 'https://github.com/kailash360/Snap-Stock',
        hosted: false,
        host_link: 'https://github.com/kailash360/Snap-Stock'
    },
    {
        name:'Snap Stock',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae officia adipisci. Impedit ipsa dignissimos dolorem omnis id reiciendis quidem non velit consequatur vel pariatur maiores quos, iste expedita est.',
        image: '/Projects/sample.jfif',
        github: 'https://github.com/kailash360/Snap-Stock',
        hosted: true,
        host_link: 'https://github.com/kailash360/Snap-Stock'
    },
    ]

    return (
        <div className={styles.projects} >
            <h2>Projects</h2>
            <h4>These are the projects that I have worked upon in the past few months</h4>
            {
                projects.map((project,index) =>
                <Card
                    key = {index}
                    index = {index}
                    name = {project.name}
                    description = {project.description}
                    image = {project.image}
                    github = {project.github}
                    hosted = {project.hosted}
                    host_link = {project.host_link || ''}                
                />)
            }
        </div>
    )
}

export default Projects
