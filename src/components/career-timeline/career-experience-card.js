import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function OutlinedCard(career) {
    const listItemStyle = {
        position: 'relative',
        float: 'left',
        margin: '10px'
      };

  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined">
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Experience
      </Typography>
      <Typography variant="h5" component="div">
      <List>
      {career.career.experience.map(experienceItem => {
            return (
                <ListItem disablePadding>
                  <ListItemText style={listItemStyle}>
                      {experienceItem}
                  </ListItemText>
              </ListItem>
            )
        })}
        </List>
    </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
      </Card>
      
    </Box>
  );
}
