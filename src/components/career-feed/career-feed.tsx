import React, { FC } from "react"
import { CareerHistory } from "../../data/model/career-history.interface"
import WorkHistoryCard from "./work-history-card"

/**
 * Mobile View for past Work History
 * @param CareerHistory
 * @returns CareerFeed Component.
 */
const CareerFeed: FC<CareerHistory> = props => {
  return (
    <div className="grid-cols-1 w-full">
      {props.workHistory.map((job, index) => {
        return (
          <div className="my-5">
            <WorkHistoryCard
              organisationName={job.organisationName}
              logo={job.logo}
              dates={job.dates}
              duration={job.duration}
              role={job.role}
              tabs={job.tabs}
            ></WorkHistoryCard>
          </div>
        )
      })}
    </div>
  )
}

export default CareerFeed
