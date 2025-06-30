import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { useTheme } from '@mui/material/styles'

export default function PreferenceCard({ framework, primary, secondary}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography
          color="textSecondary"
          gutterBottom
          sx={{ color: theme.palette.text.secondary }}
        >
          Favourite {framework} Framework
        </Typography>
        <Typography variant="h5" component="h2" sx={{ color: theme.palette.primary.main }}>
          {primary}
        </Typography>
        <Typography sx={{ color: theme.palette.secondary.main }}>
          {secondary}
        </Typography>
      </CardContent>
    </Card>
  )
}
