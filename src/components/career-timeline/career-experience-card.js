import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function OutlinedCard(experience) {
  return (
      <Grid container spacing={1}>
      {experience.experience.map(experienceItem => {
            return (
              <Grid item xs={4}>
              <Typography>{experienceItem}</Typography>
            </Grid>
            )
        })}
        </Grid>
  );
}
