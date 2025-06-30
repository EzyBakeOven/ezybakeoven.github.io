import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Footer = () => {
  return (
    <Box component="footer" sx={{
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: (theme) => theme.palette.background.paper,
      textAlign: "center"
    }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center" mb={1}>
        <Link href="/" underline="hover" color="inherit">Home</Link>
        <Link href="/blog" underline="hover" color="inherit">Blog</Link>
        <Link href="#about" underline="hover" color="inherit">About</Link>
        <IconButton href="https://github.com/ezybakeoven" target="_blank" rel="noopener" size="small" aria-label="GitHub">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" size="small" aria-label="LinkedIn">
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ color: (theme) => theme.palette.text.secondary }}>
        © {new Date().getFullYear()} EzyBakeOven. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer 