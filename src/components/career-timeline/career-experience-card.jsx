import * as React from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, useMediaQuery } from '@mui/material';

export default function OutlinedCard(experience) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <List 
      sx={{ 
        width: '100%',
        padding: { xs: 0, sm: 1 },
        '& .MuiListItem-root': {
          paddingLeft: { xs: 0, sm: 2 },
          paddingRight: { xs: 0, sm: 2 },
          paddingTop: { xs: '4px', sm: '8px' },
          paddingBottom: { xs: '4px', sm: '8px' }
        }
      }}
    >
      {experience.experience.map((experienceItem, index) => {
        return (
          <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
            <ListItemText 
              primary={experienceItem} 
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: { 
                    xs: '0.875rem',  // 14px on mobile
                    sm: '1rem'       // 16px on larger screens
                  },
                  lineHeight: { xs: 1.4, sm: 1.5 },
                  color: theme.palette.text.primary
                }
              }}
            />
          </ListItem>
        )
      })}
    </List>
  )
}
