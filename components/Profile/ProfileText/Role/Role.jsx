import {useEffect} from 'react'
import Typed from 'typed.js'

function Role() {

    const roles = [ '<span style="color:#bebff6">Full Stack Developer</span>',
                    '<span style="color:#d68888">Blockchain Developer</span>',
                    '<span style="color:#79f0fc">Open Source Enthusiast</span>',
                    '<span style="color:#d8e9cd">Technical Content Writer</span>',
                ]

    useEffect(() => {
        const options = {
            strings: roles,
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            cursorChar: "|",
        };
        let typed = new Typed('#role', options);
    }, [])

    return (<span id="role"></span>)
}

export default Role
