import React from 'react'
import './profile.css'
import ProfileImage from './ProfileImage/ProfileImage'
import ProfileText from './ProfileText/ProfileText'

function Profile() {
    return (
        <div class="profile">
            <ProfileImage></ProfileImage>
            <ProfileText></ProfileText>
        </div>
    )
}

export default Profile
