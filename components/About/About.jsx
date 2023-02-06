import styles from '../../styles/About.module.css'
import Image from 'next/image'
import Animation from "./Animation"

function About() {
    return (
        <div id="about" className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.about_section}>
                <p>
                    I am a passionate Full Stack Developer who loves to explore new technologies and build scalable applications.Although I expertize in full-stack development, I prefer to work on the backend of any application.I am also interested in Blockchain development using Solidity, and can create blockchain-based applications.I have a good hold over developing Decentralized Applications or DApps using solidity smart-contracts.
                    <br/>
                    <br/>I am also highly into Open Source and like to contribute to different projects. Currently, I have made 90+ Pull Requests, and created 30+ Issues on GitHub.More information about my Open Source profile is available at <a href="http://github.com/kailash360" target="_blank" without rel="noreferrer"> GitHub | Kailash Kejriwal</a>. 
                    <br/>
                    <br/>Apart from coding, I love to write technical blogs on the latest and emerging technologies.All of my blogs are available on <a href="https://www.medium.com/@kailash360" target="_blank" without rel="noreferrer">Medium | Kailash Kejriwal</a>, where I post articles frequently.
                    <br/>
                    <br/>I like to work on my problem solving skills by participating in contests and solving questions based on Data Structures and Algorithms. These problem-solving skills help me to optimize the applications that I develop. My LeetCode profile <a href="https://www.leetcode.com/kailash360" target="_blank" without rel="noreferrer">Leetcode | Kailash Kejriwal</a> shows my problem-solving ability.
                </p>
                {/* <Animation></Animation> */}
            </div>
        </div>
    )
}

export default About
