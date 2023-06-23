
export interface TimelineItem {
    organisationName: string;
    duration: string;
    role: string;
    dates: string;
    tabs: CareerTabItem[];
}

export  interface CareerTabItem {
    label: string;
    items: string[];
}
