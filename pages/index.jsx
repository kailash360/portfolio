import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Profile from '../components/Profile/Profile'
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience'

export default function Home() {
    return ( <>
    <Navbar/>
    <Profile/>
    <Skills/>
    <Experience/>
</>)
}