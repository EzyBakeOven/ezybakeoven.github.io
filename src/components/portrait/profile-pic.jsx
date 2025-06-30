import React from "react"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import profilePic from "../../images/profile-pic.jpg"

const ProfilePic = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: theme.spacing(26),
        height: theme.spacing(26),
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: 3,
        backgroundColor: theme.palette.background.paper,
        mb: 2,
      }}
    >
      <img
        src={profilePic}
        alt="profile picture"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
}

export default ProfilePic
