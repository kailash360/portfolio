import React from 'react'
import Image from '../../../static/images/profile-image2.jpeg'
import './ProfileImage.css'

function ProfileImage() {
    return (
        <div className="profileImage" >
            <img src={Image} alt="" />
        </div>
    )
}

export default ProfileImage
