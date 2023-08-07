import React, { FC } from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea, CardHeader } from "@mui/material"
import { TimelineJobInfoProps } from "../../data/model/career-history.interface"
import CareerTabs from "../career-timeline/career-tabs"

const WorkHistoryCard: FC<TimelineJobInfoProps> = props => {
  return (
    <Card>
      <CardHeader
        title={props.role}
        subheader={`${props.organisationName} - ${props.duration}`}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          className="max-h-36"
          image={props.logo}
          alt={`${props.organisationName} logo`}
        />
        <CareerTabs career={props}></CareerTabs>
      </CardActionArea>
    </Card>
  )
}

export default WorkHistoryCard
