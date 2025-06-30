import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

interface WorkHistoryItem {
  organisationName: string
  duration: string
  role: string
  dates: string
  tabs: { label: string; items: string[] }[]
}

interface HotStatsCardProps {
  workHistory: WorkHistoryItem[]
}

function calculateTotalYears(workHistory: WorkHistoryItem[]): number {
  // Parse all date ranges and sum up the years
  let totalMonths = 0
  workHistory.forEach((job) => {
    // Example: "April 2023 - Present" or "Feb 2018 - Nov 2018"
    const [start, end] = job.dates.split(" - ")
    const startDate = new Date(start)
    const endDate = end === "Present" ? new Date() : new Date(end)
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())
      totalMonths += Math.max(0, months)
    }
  })
  return Math.round((totalMonths / 12) * 10) / 10 // 1 decimal place
}


const HotStatsCard: React.FC<HotStatsCardProps> = ({ workHistory }) => {
  const totalYears = calculateTotalYears(workHistory)

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#fab387' }}>
          Hot Stats
        </Typography>
        <Typography variant="body1" color="text.primary">
          <b>Total Experience:</b> {totalYears} years
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
          Full Stack Engineer
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HotStatsCard 