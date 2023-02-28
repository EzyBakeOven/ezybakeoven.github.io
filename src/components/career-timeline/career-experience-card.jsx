import * as React from "react"
import Grid from "@mui/material/Grid"

export default function OutlinedCard(experience) {
  return (
    <Grid container spacing={1}>
      {experience.experience.map(experienceItem => {
        return (
          <Grid key={experienceItem} item xs={12} md={6} lg={3}>
            {experienceItem}
          </Grid>
        )
      })}
    </Grid>
  )
}
