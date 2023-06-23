import React from "react"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import CareerHistory from "../../data/career-history.json"
import CareerTabs from "./career-tabs"
import "./career-timeline.css";

export default function CareerTimeline() {
  return (
    <Timeline position="alternate">
      {CareerHistory.map((career, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              {career.duration}
              <p>{career.dates}</p>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Paper elevation={24} className="experience-card">
                <Typography variant="h6" component="h1">
                  {career.organisationName}
                </Typography>
                <Typography>{career.role}</Typography>
                <CareerTabs careerTabProps={career}></CareerTabs>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
