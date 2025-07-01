import React from "react"
import { graphql, Link } from "gatsby"
import { Card, CardContent, CardActionArea, Typography, Container, Grid, Chip, Box, useTheme, Paper } from "@mui/material"
import { CalendarToday, Person, Tag } from "@mui/icons-material"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSubscription from "../components/blog-subscription/blog-subscription"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Blog" description="Thoughts on software engineering, technology, and career development" />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ 
          p: 4, 
          mb: 4,
          backgroundColor: '#313244', // Surface 0
          border: `1px solid #cba6f7`, // Mauve
        }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 2,
              color: '#89b4fa', // Blue
              fontWeight: 700,
            }}
          >
            Blog
          </Typography>
          <Typography 
            variant="body1" 
            component="p" 
            gutterBottom 
            align="center" 
            sx={{ 
              color: '#bac2de', // Subtext 1
              fontWeight: 400,
            }}
          >
            Thoughts on software engineering, technology, and career development
          </Typography>
        </Paper>

        {/* Blog Subscription Section */}
        <BlogSubscription />
        
        <Grid container spacing={3}>
          {posts.map(({ node }, index) => {
            const { frontmatter, fields } = node
            // Cycle through different catppuccin accent colors for each card
            const accentColors = ['#cba6f7', '#f5c2e7', '#89dceb', '#a6e3a1', '#fab387', '#f9e2af'];
            const accentColor = accentColors[index % accentColors.length];
            
            return (
              <Grid item xs={12} md={6} key={node.id}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    backgroundColor: '#313244', // Surface 0
                    border: `1px solid ${accentColor}`,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease-in-out',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: accentColor,
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      backgroundColor: '#45475a', // Surface 1
                      borderColor: accentColor,
                    },
                  }}
                >
                  <CardActionArea 
                    component={Link} 
                    to={fields.slug} 
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                  >
                    <Box sx={{ p: 3, pt: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{
                          color: accentColor,
                          fontWeight: 600,
                          lineHeight: 1.3,
                          mb: 2,
                        }}
                      >
                        {frontmatter.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: 3, 
                          flexGrow: 1,
                          color: '#cdd6f4', // Text
                          lineHeight: 1.6,
                        }}
                      >
                        {frontmatter.description}
                      </Typography>
                      
                      <Box sx={{ mt: 'auto' }}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 2,
                          p: 2,
                          backgroundColor: '#45475a', // Surface 1
                          borderRadius: 2,
                        }}>
                          <CalendarToday sx={{ fontSize: 16, mr: 1, color: '#fab387' }} />
                          <Typography 
                            variant="body2" 
                            sx={{ color: '#bac2de', mr: 3, fontWeight: 500 }}
                          >
                            {new Date(frontmatter.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </Typography>
                          
                          <Person sx={{ fontSize: 16, mr: 1, color: '#a6e3a1' }} />
                          <Typography 
                            variant="body2" 
                            sx={{ color: '#bac2de', fontWeight: 500 }}
                          >
                            {frontmatter.author}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {frontmatter.tags.map((tag, tagIndex) => {
                            const tagColor = accentColors[(tagIndex + index) % accentColors.length];
                            return (
                              <Chip
                                key={tagIndex}
                                label={tag}
                                size="small"
                                sx={{ 
                                  fontSize: '0.75rem',
                                  backgroundColor: `${tagColor}15`,
                                  borderColor: tagColor,
                                  border: `1px solid ${tagColor}`,
                                  color: tagColor,
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: `${tagColor}25`,
                                  },
                                }}
                              />
                            );
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
        
        {posts.length === 0 && (
          <Paper elevation={3} sx={{ 
            p: 4,
            textAlign: 'center',
            backgroundColor: '#313244', // Surface 0
            border: `1px solid #f38ba8`, // Red
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#f38ba8', // Red
                mb: 2,
                fontWeight: 600,
              }}
            >
              No blog posts yet!
            </Typography>
            <Typography 
              variant="body1"
              sx={{ color: '#bac2de' }}
            >
              Check back soon for exciting content about software engineering and technology!
            </Typography>
          </Paper>
        )}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
            tags
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage 