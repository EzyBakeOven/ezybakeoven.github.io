import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { useTheme } from '@mui/material/styles'

function ListItemLink(props) {
  return <ListItem component="a" {...props} />
}

export default function TitleCard() {
  const theme = useTheme();
  return (
    <div className="title-card">
      <Card variant="outlined" sx={{ background: theme.palette.background.paper, borderColor: theme.palette.primary.main, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ color: theme.palette.primary.main, fontWeight: theme.typography.h1.fontWeight }}>
            Matt Hoy
          </Typography>
          <Typography color="textSecondary" sx={{ color: theme.palette.text.secondary }}>
            Senior Software Engineer
          </Typography>
          <List component="nav" aria-label="links">
            <ListItemLink
              href="https://www.linkedin.com/in/stringmatthewhoy/"
              target="_blank"
              sx={{ color: theme.palette.info.main }}
            >
              <ListItemIcon sx={{ color: theme.palette.info.main }}>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemLink>

            <Divider />

            <ListItemLink href="https://github.com/EzyBakeOven" target="_blank" sx={{ color: theme.palette.secondary.main }}>
              <ListItemIcon sx={{ color: theme.palette.secondary.main }}>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItemLink>
          </List>
        </CardContent>
      </Card>
    </div>
  )
}
