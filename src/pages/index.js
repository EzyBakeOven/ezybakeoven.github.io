import React from "react"
import Layout from "../components/layout"
import ProfilePic from "../components/portrait/profile-pic"
import SEO from "../components/seo"
import TitleCard from "../components/title-card/title-card"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import CareerHistory from "../data/career-history.json"
import CareerFeed from "../components/career-feed/career-feed"
import CareerTimeline from "../components/career-timeline/career-timeline"
import CharacterProfile from "../components/character-profile/character-profile"
import PreferenceCard from "../components/preference-card/preference-card"
import HotStatsCard from "../components/hot-stats-card/hot-stats-card"

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Senior Software Engineer"
        description="Adelaide senior software engineer."
        lang="en-US"
        url="https://ezybakeoven.github.io/"
      />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Sidebar/Profile - left on desktop, top on mobile */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, mb: { xs: 2, md: 0 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ProfilePic />
                <Box sx={{ width: '100%', mb: 2 }}>
                  <TitleCard />
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <HotStatsCard workHistory={CareerHistory} />
              </Box>
            </Paper>
          </Grid>

          {/* Main Feed/Timeline */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 2 }}>
              <CharacterProfile />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'block' } }}>
              {/* Timeline for desktop, Feed for mobile */}
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <CareerTimeline workHistory={CareerHistory} />
              </Box>
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <CareerFeed workHistory={CareerHistory} />
              </Box>
            </Box>
            {/* Preferences Cards */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <PreferenceCard
                  framework="Frontend"
                  primary="React"
                  secondary="Angular"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PreferenceCard
                  framework="Backend"
                  primary="Spring"
                  secondary="NestJS"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
