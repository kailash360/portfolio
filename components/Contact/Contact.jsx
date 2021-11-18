import styles from '../../styles/Contact.module.css'
import {useState} from 'react'
import Image from 'next/image'

const links = [
{
    name:'Gamil',
    icon:'/Contact/gmail.svg',
    link:'mailto:kailashkejriwal21@gmail.com'
},
{
    name:'LinkedIn',
    icon:'/Contact/linkedin.svg',
    link:'https://www.linkedin.com/in/kailash360/'
},
{
    name:'Medium',
    icon:'/Contact/medium.svg',
    link:'https://medium.com/@kailash360'
},
{
    name:'GitHub',
    icon:'/Contact/github.svg',
    link:'https://github.com/kailash360'
},
{
    name:'Facebook',
    icon:'/Contact/facebook.svg',
    link:'https://www.facebook.com/kailash.kejriwal.360/'
},
{
    name:'Instagram',
    icon:'/Contact/instagram.svg',
    link:'https://instagram.com/its.kailash'
},
{
    name:'Twitter',
    icon:'/Contact/twitter.svg',
    link:'https://twitter.com/KailashK360'
},
]

function Link ({key,name,icon,link}) {
    return (
        <a href={link}>
            <Image src={icon} alt={name} height={50} width={50}></Image>
        </a>
    )
}


function Contact() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    return (
        <div className={styles.contact} id="contact">
            <div className={styles.left}>
                <h2>Get in touch</h2>
                <p>If you&apos;ve got a project in mind, why not get in touch.<br/> Let&apos;s work together.</p>
                <div className={styles.links}>
                    {links.map(link => <Link key={link.name} name={link.name} icon={link.icon} link={link.link} target="_blank" without rel="noreferrer" ></Link> )}
                </div>
            </div>
            <div className={styles.right}>
                <span>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} />
                </span>
                <span>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
                </span>
                <span>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" onChange={(e)=>{setMessage(e.target.value)}} />
                </span>
                <a href={`mailto:kailashkejriwal21gmail.com?from=${email}&name=${name}&body=${message}`} className={styles.submit} >Submit</a>
            </div>
        </div>
    )
}

export default Contact
