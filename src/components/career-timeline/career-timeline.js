import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CareerHistory from '../../data/career-history.json';
import CareerTabs from './career-tabs';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CareerTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {CareerHistory.map(career => { return (<TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          { career.duration }
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              { career.organisationName }
            </Typography>
            <Typography>{ career.role }</Typography>
            <CareerTabs career={career}></CareerTabs>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      )})}
    </Timeline>
  );
}