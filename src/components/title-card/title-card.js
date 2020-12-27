import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
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
  const classes = useStyles()

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
