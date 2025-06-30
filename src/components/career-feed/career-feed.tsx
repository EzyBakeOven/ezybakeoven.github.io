import React, { FC } from "react"
import { CareerHistory } from "../../data/model/career-history.interface"
import WorkHistoryCard from "./work-history-card"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

/**
 * Mobile View for past Work History
 * @param CareerHistory
 * @returns CareerFeed Component.
 */
const CareerFeed: FC<CareerHistory> = props => {
  return (
    <Grid container direction="column" spacing={2} sx={{ width: '100%' }}>
      {props.workHistory.map((job, index) => {
        return (
          <Grid item key={index}>
            <WorkHistoryCard
              organisationName={job.organisationName}
              logo={job.logo}
              dates={job.dates}
              duration={job.duration}
              role={job.role}
              tabs={job.tabs}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CareerFeed
