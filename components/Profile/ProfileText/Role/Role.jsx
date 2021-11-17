import {useEffect} from 'react'
import Typed from 'typed.js'

function Role() {

    const roles = [ '<span style="color:blue">Full Stack Developer</span>',
                    '<span style="color:red">Blockchain Developer</span>',
                    '<span style="color:yellow">Technical Content Writer</span>',
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
