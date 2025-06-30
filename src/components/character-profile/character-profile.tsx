import Paper from "@mui/material/Paper"
import React, { FC } from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const CharacterProfile: FC = () => {
  return (
    <Paper elevation={3}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#cba6f7' }}>
          About Me
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          Senior software engineer with a passion for full-stack development and a comprehensive breadth of knowledge across the technology spectrum.
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          Drawing inspiration from values-driven leadership developed by Coach K, I lead by example, fostering collaborative environments that empower team members to excel.
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          With a proven track record in delivering top-tier software solutions, I leverage my extensive expertise to drive innovation, technical excellence, and team growth.
        </Typography>
        <Typography variant="body1" color="text.primary">
          My dedication to fostering a positive and innovative environment allows me to drive projects forward while prioritizing both technical requirements and team development.
        </Typography>
      </Box>
    </Paper>
  )
}

export default CharacterProfile
