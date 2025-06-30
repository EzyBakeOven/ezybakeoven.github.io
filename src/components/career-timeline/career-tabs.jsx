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
  const theme = require('@mui/material/styles').useTheme ? require('@mui/material/styles').useTheme() : null;
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)

  const handleChange = (event, newIndex) => {
    setSelectedTabIndex(newIndex)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '100vw', overflowX: 'auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: '100vw', overflowX: 'auto' }}>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={selectedTabIndex}
          onChange={handleChange}
          aria-label="tabs that outline my experience."
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            fontFamily: theme ? theme.typography.fontFamily : undefined,
            fontWeight: theme ? theme.typography.h2.fontWeight : 600,
            fontSize: theme ? theme.typography.h2.fontSize : '1.5rem',
            color: theme ? theme.palette.text.primary : undefined,
            maxWidth: '100vw',
            overflowX: 'auto',
          }}
        >
          {careerTab.career.tabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={<Box sx={{
                fontFamily: theme ? theme.typography.fontFamily : undefined,
                fontWeight: theme ? theme.typography.h2.fontWeight : 600,
                fontSize: theme ? theme.typography.h2.fontSize : '1.5rem',
                color: theme ? theme.palette.text.primary : undefined,
                textTransform: 'none',
              }}>{tab.label}</Box>}
              {...a11yProps(index)}
              sx={{
                minHeight: 48,
                fontFamily: theme ? theme.typography.fontFamily : undefined,
                fontWeight: theme ? theme.typography.h2.fontWeight : 600,
                fontSize: theme ? theme.typography.h2.fontSize : '1.5rem',
                color: theme ? theme.palette.text.primary : undefined,
                textTransform: 'none',
              }}
            />
          ))}
        </Tabs>
      </Box>
      {careerTab.career.tabs.map((tab, index) => (
        <TabPanel value={selectedTabIndex} index={index} key={tab.label}>
          <OutlinedCard experience={tab.items}></OutlinedCard>
        </TabPanel>
      ))}
    </Box>
  )
}
