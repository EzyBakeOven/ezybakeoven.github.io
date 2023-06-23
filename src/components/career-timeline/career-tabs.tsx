import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import OutlinedCard from "./career-experience-card"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import "./career-tabs.css"
import { CareerTabItem } from "./model/timeline-item.interface"
import { TabPanelProps } from "@mui/lab/TabPanel"

interface CreateTabProps {
  tab: CareerTabItem;
  tabIndex: number;
}

function CreateTab({ tab, tabIndex }: CreateTabProps) {
  return <Tab key={`${tabIndex}-tab-id`} aria-controls={`${tab.label}-tab-${tabIndex}`} label={tab.label} />
}

function TabPanel(props: TabPanelProps) {
  const { children, value, tabIndex, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`full-width-tabpanel-${tabIndex}`}
      aria-labelledby={`full-width-tab-${tabIndex}`}
      {...other}
    >
      {(
        <Box sx={{ p: 3 }}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

export default function CareerTabs({ careerTabProps }: TimelineItem) {
  const [value, setValue] = React.useState('')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {careerTabProps.tabs.map((careerItem: CareerTabItem, index: number) =>
            <CreateTab tab={careerItem} tabIndex={index}></CreateTab>
          )}
        </Tabs>
      </Box>
      {careerTabProps.tabs.map((careerItem: CareerTabItem, index: number) =>
        <TabPanel key={index} value={careerItem.label} tabIndex={index}>
            {careerItem.items.toString()}
        </TabPanel>
      )}
    </Box>
  )
}
