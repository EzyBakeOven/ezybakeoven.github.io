export interface JobInfoTabs {
  label: string;
  items: string[];
}

export interface TimelineJobInfoProps {
  organisationName: string;
  logo: string;
  duration: string;
  role: string;
  dates: string;
  tabs: JobInfoTabs;
}

export interface CareerHistory {
  workHistory: TimelineJobInfoProps[];
}
