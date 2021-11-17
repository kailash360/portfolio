import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Profile from '../components/Profile/Profile'
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Blogs from '../components/Blogs/Blogs'   
import Contact from '../components/Contact/Contact'

export async function getStaticProps(context) {

    let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kailash360`)
    response = await response.json()
    let blogs = response.items

    return {
      props: {blogs}, // will be passed to the page component as props
    }
}

export default function Home({blogs}) {

  const handleScroll = (e) => {
    console.log(e.target.value)
    Scroll.scroller.scrollTo(e.target.value, {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: 'root',
    })
  }

    return ( <>
    <Navbar handleScroll={handleScroll} />
    <Profile/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Blogs blogs={blogs} />
    <Contact/>
  </>)
}