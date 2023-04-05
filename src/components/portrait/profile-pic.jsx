import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./profile-pic.css"

const ProfilePic = () => {
  return <StaticImage
    className="profile-pic"
    src="../../images/profile-pic.jpg"
    alt="profile picture"
    />
}

export default ProfilePic
