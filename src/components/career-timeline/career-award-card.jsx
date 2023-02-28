import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"

export default function AwardCard(award) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {award.award[0]}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
