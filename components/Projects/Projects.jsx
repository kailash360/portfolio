import Card from './Card/Card'
import styles from '../../styles/Projects.module.css'

function Projects() {

    const projects =[
    {
        name:'Snap Stock',
        description:'A solidity-smart-contract based DApp that lets the users upload their images in exchange of gas fee and tip the images of others, based on their choice',
        image: '/Projects/Snapstock.png',
        github: 'https://github.com/kailash360/Snap-Stock',
        hosted: false,
        host_link: 'https://github.com/kailash360/Snap-Stock'
    },
    {
        name:'Uthaan IIITM Website',
        description:'The official wbsite of Uthaan IIITM, developed using ReactJS + Redux in the frontend, and NodeJS + Express in the backend, with MongoDB as the database',
        image: '/Projects/Uthaan.png',
        github: 'https://github.com/Uthaan-IIITM',
        hosted: true,
        host_link: 'https://www.uthaan.org/'
    },
    {
        name:'Bloggify',
        description:'A multi-user blogging platform, developed using ReactJS in the frontend, and NodeJS + Express in the backend, with MongoDB as the database. It also provides every new user with a unique profile image for better user experience.',
        image: '/Projects/bloggify.png',
        github: null,
        hosted: true,
        host_link: 'https://bloggify-app.netlify.app/'
    },
    {
        name:'Quiz Bee',
        description:'A quiz game built using ReactJS and REST API, and comes with different levels of difficulty for better user experience',
        image: '/Projects/Quizmaster.png',
        github: 'https://github.com/kailash360/react-quiz-app',
        hosted: true,
        host_link: 'https://kailash360.github.io/react-quiz-app/'
    },
    {
        name:'Easy Cart',
        description:'An e-commerce platform that is built using HTML,CSS and JavaScript in the frontend,and NodeJS + Express in the backend, with POstgreSQL as the database',
        image: '/Projects/Easycart.png',
        github: 'https://github.com/kailash360/e-market',
        hosted: true,
        host_link: 'https://e-market-site.herokuapp.com/'
    }
]

    return (
        <div className={styles.projects} id="projects">
            <h1>Projects</h1>
            <p>These are the projects that I have worked upon in the past few months.</p>
            <div className={styles.projects_section}>
            {projects.map((project,index) =>
                <Card
                    key = {index}
                    index = {index}
                    name = {project.name}
                    description = {project.description}
                    image = {project.image}
                    github = {project.github}
                    hosted = {project.hosted}
                    host_link = {project.host_link || ''}                
                />)}
            </div>
            <div className={styles.more_button_container}>
                <a href="https://www.github.com/kailash360" title="Kailash360" target="_blank" without rel="noreferrer" className={styles.more_button} >See All Projects</a>
            </div>
        </div>
    )
}

export default Projects
