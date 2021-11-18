import {useEffect} from 'react'
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
import Script from 'next/script'
import Particles from 'react-tsparticles'
const particleOptions = require('../utils/particles.json')

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
      <Head>
        <title>Kailash Kejriwal</title>
      </Head>
      <Particles id="tsparticles" options={particleOptions} />
      <Navbar handleScroll={handleScroll} />
      <Profile/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Blogs blogs={blogs} />
      <Contact/>
      <Script src="https://kit.fontawesome.com/2c32a0aecc.js" crossOrigin="anonymous"></Script>
    </>)
}