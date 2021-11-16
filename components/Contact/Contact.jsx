import styles from '../../styles/Contact.module.css'
import {useState} from 'react'
import Image from 'next/image'

const links = [
{
    name:'facebook',
    icon:'/Contact/facebook.svg',
    link:'https://www.facebook.com'
},
{
    name:'facebook',
    icon:'/Contact/facebook.svg',
    link:'https://www.facebook.com'
},
{
    name:'facebook',
    icon:'/Contact/facebook.svg',
    link:'https://www.facebook.com'
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
        <div className={styles.contact}>
            <div className={styles.left}>
                <h2>Get in touch</h2>
                <p>If you've got a project in mind, why not get in touch.<br/> Let's work together.</p>
                <div className={styles.links}>
                    {links.map(link => <Link key={link.name} name={link.name} icon={link.icon} link={link.link} ></Link> )}
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
