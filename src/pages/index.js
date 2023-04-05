import React from "react"
import Layout from "../components/layout"
import ProfilePic from "../components/portrait/profile-pic"
import SEO from "../components/seo"
import TitleCard from "../components/title-card/title-card"
import CareerTimeline from "../components/career-timeline/career-timeline"
import Grid from "@mui/material/Grid"
import PreferenceCard from "../components/preference-card/preference-card"

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Senior Software Engineer"
        description="Adelaide senior software engineer."
        lang="en-US"
        url=""
      />
      <ProfilePic />
      <Grid container>
        <Grid item xs={12} sm={12} md={3}>
          <TitleCard className="z-10"></TitleCard>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <CareerTimeline></CareerTimeline>
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={6} sm={6} md={6}>
          <PreferenceCard
            framework="Frontend"
            primary="React"
            secondary="Angular"
          ></PreferenceCard>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <PreferenceCard
            framework="Backend"
            primary="Spring"
            secondary="NestJS"
          ></PreferenceCard>
        </Grid>
      </Grid>
    </Layout>
  )
}
