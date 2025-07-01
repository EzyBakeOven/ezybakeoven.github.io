import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useTheme, useMediaQuery } from "@mui/material"
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
      {value === index && <Box sx={{ p: { xs: 1, sm: 2 } }}>{children}</Box>}
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)

  const handleChange = (event, newIndex) => {
    setSelectedTabIndex(newIndex)
  }

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: '100%',
      mt: { xs: 1, sm: 2 }
    }}>
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        width: '100%'
      }}>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={selectedTabIndex}
          onChange={handleChange}
          aria-label="Career experience tabs"
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            width: '100%',
            minHeight: { xs: 40, sm: 48 },
            '& .MuiTabs-flexContainer': {
              gap: { xs: 0, sm: 1 }
            }
          }}
        >
          {careerTab.career.tabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                minHeight: { xs: 40, sm: 48 },
                fontSize: { 
                  xs: '0.75rem',    // 12px on mobile
                  sm: '0.875rem',   // 14px on tablet
                  md: '1rem'        // 16px on desktop
                },
                fontWeight: { xs: 500, sm: 600 },
                textTransform: 'none',
                color: theme.palette.text.primary,
                minWidth: { xs: 'auto', sm: 90 },
                padding: { 
                  xs: '8px 12px', 
                  sm: '12px 16px' 
                },
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                  fontWeight: 600
                }
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
