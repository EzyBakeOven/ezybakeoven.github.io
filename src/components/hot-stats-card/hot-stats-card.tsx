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

function parseMonthYear(dateStr: string): Date {
  // Handle "Present" case
  if (dateStr === "Present") {
    return new Date()
  }
  
  // Parse "Month YYYY" format
  const parts = dateStr.trim().split(" ")
  if (parts.length === 2) {
    const monthStr = parts[0]
    const year = parseInt(parts[1])
    
    const monthMap: { [key: string]: number } = {
      "Jan": 0, "January": 0,
      "Feb": 1, "February": 1,
      "Mar": 2, "March": 2,
      "Apr": 3, "April": 3,
      "May": 4,
      "Jun": 5, "June": 5,
      "Jul": 6, "July": 6,
      "Aug": 7, "August": 7,
      "Sep": 8, "September": 8,
      "Oct": 9, "October": 9,
      "Nov": 10, "November": 10,
      "Dec": 11, "December": 11
    }
    
    const month = monthMap[monthStr]
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1)
    }
  }
  
  // Fallback to regular Date parsing
  return new Date(dateStr)
}

function calculateTotalYears(workHistory: WorkHistoryItem[]): number {
  let totalMonths = 0
  
  workHistory.forEach((job) => {
    const [start, end] = job.dates.split(" - ")
    const startDate = parseMonthYear(start)
    const endDate = parseMonthYear(end)
    
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