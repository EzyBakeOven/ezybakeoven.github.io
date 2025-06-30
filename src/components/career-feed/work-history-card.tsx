import React, { FC } from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import { CardActionArea, Box, Typography, useTheme } from "@mui/material"
import { TimelineJobInfoProps } from "../../data/model/career-history.interface"
import CareerTabs from "../career-timeline/career-tabs"

const WorkHistoryCard: FC<TimelineJobInfoProps> = props => {
  const theme = useTheme();
  return (
    <Card sx={{ bgcolor: theme.palette.background.paper }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ maxHeight: 144, objectFit: 'contain', p: 2 }}
          image={props.logo}
          alt={`${props.organisationName} logo`}
        />
        <CardContent>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: theme.typography.h2.fontWeight,
              fontSize: theme.typography.h2.fontSize,
              mb: 0.5,
            }}
          >
            {props.role}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: theme.typography.body1.fontSize,
              mb: 1,
            }}
          >
            {props.organisationName} - {props.duration}
          </Typography>
          <CareerTabs career={props}></CareerTabs>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default WorkHistoryCard
