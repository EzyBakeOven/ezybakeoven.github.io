import * as React from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function OutlinedCard(experience) {
  return (
    <List>
      {experience.experience.map(experienceItem => {
        return <ListItem>
          <ListItemText primary={experienceItem} />
        </ListItem>
      })}
    </List>
  )
}
