import React, { FC } from "react"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { useMediaQuery, useTheme } from "@mui/material"
import "./career-timeline.css"
import { CareerHistory } from "../../data/model/career-history.interface"
import CareerTabs from "./career-tabs"

const CareerTimeline: FC<CareerHistory> = (props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Timeline position={isMobile ? "right" : "alternate"} className="career-timeline">
      {props.workHistory.map((job, index) => {
        return (
          <TimelineItem key={index}>
            {!isMobile && (
              <TimelineOppositeContent color="text.secondary">
                {job.duration}
                <p>{job.dates}</p>
              </TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Paper 
                elevation={24} 
                className="experience-card" 
                sx={{ 
                  p: isMobile ? 2 : 3, 
                  width: '100%', 
                  boxSizing: 'border-box', 
                  maxWidth: '100%',
                  margin: isMobile ? '0' : 'auto',
                  '@media (max-width: 768px)': {
                    margin: '0',
                    padding: '16px',
                    maxWidth: 'calc(100vw - 80px)'
                  }
                }}
              >
                {isMobile && (
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    {job.duration} • {job.dates}
                  </Typography>
                )}
                <Typography variant="h6" component="h1" sx={{ color: '#89b4fa' }}>
                  {job.organisationName}
                </Typography>
                <Typography>{job.role}</Typography>
                <CareerTabs career={job}></CareerTabs>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

export default CareerTimeline;
