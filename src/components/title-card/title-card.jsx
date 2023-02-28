import React from "react"
import {
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
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

const useStyles = extendTheme(theme => ({
  pos: {
    marginBottom: 12,
  },
  listClasses: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

export default function OutlinedCard() {
  const classes = useStyles

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          Matt Hoy
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Software Engineer
        </Typography>
        <List
          component="nav"
          className={classes.listClasses}
          aria-label="links"
        >
          <ListItemLink href="https://www.linkedin.com/in/stringmatthewhoy/" target="_blank">
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
  )
}
