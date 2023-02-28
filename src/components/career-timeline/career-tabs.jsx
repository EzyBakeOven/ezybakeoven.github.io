import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import OutlinedCard from "./career-experience-card"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import "./career-tabs.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
export default function CareerTabs(career) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          aria-label="tabs that outline my experience."
        >
          <Tab label="Experience" {...a11yProps(0)} />
          {career.career.awards[0] !== undefined && (
            <Tab className="award-card-parent" label="Awards" {...a11yProps(1)} />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OutlinedCard experience={career.career.experience}></OutlinedCard>
      </TabPanel>
      {career.career.awards[0] !== undefined && (
        <TabPanel value={value} index={1} className="award-card">
          <EmojiEventsIcon className="award-icon"></EmojiEventsIcon>
          <p className="award-content">{career.career.awards[0]}</p>
        </TabPanel>
      )}
    </Box>
  )
}
