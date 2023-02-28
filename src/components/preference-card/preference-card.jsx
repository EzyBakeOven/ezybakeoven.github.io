import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function PreferenceCard({ framework, primary, secondary}) {
  return (
    <Card>
      <CardContent>
        <Typography
          color="textSecondary"
          gutterBottom
        >
          Favourite {framework} Framework
        </Typography>
        <Typography variant="h5" component="h2">
          {primary}
        </Typography>
        <Typography color="textSecondary">
          {secondary}
        </Typography>
      </CardContent>
    </Card>
  )
}
