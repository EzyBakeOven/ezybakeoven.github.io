import React from "react"
import Layout from "../components/layout"
import ProfilePic from "../components/portrait/profile-pic"
import SEO from "../components/seo"
import TitleCard from "../components/title-card/title-card"
import Grid from "@mui/material/Grid"
import PreferenceCard from "../components/preference-card/preference-card"
import CareerHistory from "../data/career-history.json"
import CareerFeed from "../components/career-feed/career-feed"
import CareerTimeline from "../components/career-timeline/career-timeline"
import CharacterProfile from "../components/character-profile/character-profile"

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Senior Software Engineer"
        description="Adelaide senior software engineer."
        lang="en-US"
        url="https://ezybakeoven.github.io/"
      />
      <ProfilePic />
      <div className="w-full grid grid-rows-1 grid-flow-col gap-4">
        <div className="">
          <TitleCard></TitleCard>
        </div>
        <div className="row-span-1 col-span-2 hidden md:block">
          <CharacterProfile></CharacterProfile>
        </div>
      </div>

      <div className="hidden md:block">
        <CareerTimeline workHistory={CareerHistory}></CareerTimeline>
      </div>
      <div className="md:hidden">
        <CareerFeed workHistory={CareerHistory}></CareerFeed>
      </div>

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
