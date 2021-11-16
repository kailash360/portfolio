import React from 'react'
import ProfileImageAsset from '../../../public/Profile/profile-image2.jpeg'
import styles from '../../../styles/Profile.module.css'

function ProfileImage() {
    return (
        <div className={styles.profileImage} >
            <img src="/Profile/profile-image2.jpeg" alt="" />
        </div>
    )
}

export default ProfileImage