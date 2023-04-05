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

function ListItemLink(props) {
  return <ListItem component="a" {...props} />
}

export default function TitleCard() {
  return (
    <div className="relative z-5">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            Matt Hoy
          </Typography>
          <Typography color="textSecondary">
            Senior Software Engineer
          </Typography>
          <List component="nav" aria-label="links">
            <ListItemLink
              href="https://www.linkedin.com/in/stringmatthewhoy/"
              target="_blank"
            >
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemLink>

            <Divider />

            <ListItemLink href="https://github.com/EzyBakeOven" target="_blank">
              <ListItemIcon>
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
