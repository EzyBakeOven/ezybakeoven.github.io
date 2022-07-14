import React from "react"
import Layout from "../components/layout"
import ProfilePic from "../components/portrait/profile-pic"
import SEO from "../components/seo"
import OutlinedCard from "../components/title-card/title-card"
import CareerTimeline from "../components/career-timeline/career-timeline"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import PreferenceCard from "../components/preference-card/preference-card"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

export default function IndexPage() {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <ProfilePic />
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={3}>
            <OutlinedCard></OutlinedCard>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <CareerTimeline></CareerTimeline>
          </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center" spacing="3">
          <Grid item xs={6} sm={6} md={6}>
            <PreferenceCard framework="Frontend" primary="Angular" secondary="React"></PreferenceCard>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <PreferenceCard framework="Backend" primary="NestJS" secondary="Spring"></PreferenceCard>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}