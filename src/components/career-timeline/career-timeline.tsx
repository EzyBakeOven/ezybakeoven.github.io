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
import "./career-timeline.css"
import { CareerHistory } from "../../data/model/career-history.interface"
import CareerTabs from "./career-tabs"

const CareerTimeline: FC<CareerHistory> = (props) => {
  return (
    <Timeline position="alternate">
      {props.workHistory.map((job, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              {job.duration}
              <p>{job.dates}</p>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Paper elevation={24} className="experience-card">
                <Typography variant="h6" component="h1">
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
