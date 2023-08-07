import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import OutlinedCard from "./career-experience-card"
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

function a11yProps(tabIndex) {
  return {
    id: `simple-tab-${tabIndex}`,
    "aria-controls": `simple-tabpanel-${tabIndex}`,
  }
}
export default function CareerTabs(careerTab) {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)

  const handleChange = (event, newIndex) => {
    setSelectedTabIndex(newIndex)
  }
  console.log(careerTab.career)

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={selectedTabIndex}
          onChange={handleChange}
          aria-label="tabs that outline my experience."
        >
          {careerTab.career.tabs.map((tab, index) => (
            <Tab label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {careerTab.career.tabs.map((tab, index) => (
        <TabPanel value={selectedTabIndex} index={index}>
          <OutlinedCard experience={tab.items}></OutlinedCard>
        </TabPanel>
      ))}
    </Box>
  )
}
