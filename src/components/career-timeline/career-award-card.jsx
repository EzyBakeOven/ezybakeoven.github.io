import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useTheme, useMediaQuery } from '@mui/material'

export default function AwardCard(award) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card 
      sx={{ 
        maxWidth: { xs: '100%', sm: 345 },
        width: '100%',
        margin: { xs: '8px 0', sm: '16px' },
        boxShadow: { xs: 1, sm: 3 }
      }}
    >
      <CardContent 
        sx={{ 
          padding: { xs: '12px', sm: '16px' },
          '&:last-child': {
            paddingBottom: { xs: '12px', sm: '16px' }
          }
        }}
      >
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem' },
            lineHeight: { xs: 1.4, sm: 1.5 }
          }}
        >
          {award.award[0]}
        </Typography>
      </CardContent>
      <CardActions 
        disableSpacing
        sx={{ 
          padding: { xs: '4px 12px', sm: '8px 16px' }
        }}
      >
        <IconButton 
          aria-label="add to favorites"
          size={isMobile ? "small" : "medium"}
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <FavoriteIcon fontSize={isMobile ? "small" : "medium"} />
        </IconButton>
      </CardActions>
    </Card>
  )
}
