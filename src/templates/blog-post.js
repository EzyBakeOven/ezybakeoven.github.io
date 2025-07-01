import React from "react"
import { graphql, Link } from "gatsby"
import { Typography, Container, Box, Chip, Divider, Button, useTheme, Paper, Grid } from "@mui/material"
import { CalendarToday, Person, ArrowBack } from "@mui/icons-material"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const theme = useTheme()

  return (
    <Layout>
      <SEO 
        title={frontmatter.title}
        description={frontmatter.description}
        article={true}
      />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ 
          p: 4, 
          backgroundColor: '#313244', // Surface 0
          border: `1px solid #585b70`, // Surface 2
        }}>
          <Button
            component={Link}
            to="/blog"
            startIcon={<ArrowBack />}
            sx={{ 
              mb: 4,
              color: '#89dceb', // Mocha Sky
              backgroundColor: '#45475a', // Surface 1
              '&:hover': {
                backgroundColor: '#585b70', // Surface 2
                color: '#74c7ec', // Sapphire
                transform: 'translateY(-2px)',
              }
            }}
          >
            Back to Blog
          </Button>
          
          <article>
            <header>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom
                sx={{
                  color: '#89b4fa', // Blue
                  mb: 3,
                }}
              >
                {frontmatter.title}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3, 
                p: 2, 
                backgroundColor: '#45475a', // Surface 1
                borderRadius: 2,
                border: `1px solid #585b70`, // Surface 2
              }}>
                <CalendarToday sx={{ fontSize: 18, mr: 1, color: '#fab387' }} /> {/* Peach */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mr: 4,
                    color: '#cdd6f4', // Text
                    fontWeight: 500,
                  }}
                >
                  {new Date(frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>
                
                <Person sx={{ fontSize: 18, mr: 1, color: '#a6e3a1' }} /> {/* Green */}
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: '#cdd6f4', // Text
                    fontWeight: 500,
                  }}
                >
                  {frontmatter.author}
                </Typography>
              </Box>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4,
                  color: '#f5c2e7', // Pink
                  fontWeight: 600,
                  fontStyle: 'italic',
                  p: 3,
                  backgroundColor: '#181825', // Mantle
                  borderRadius: 2,
                  borderLeft: `4px solid #f5c2e7`, // Pink
                }}
              >
                {frontmatter.description}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
                {frontmatter.tags.map((tag, index) => {
                  // Cycle through different catppuccin colors for tags
                  const tagColors = ['#cba6f7', '#f5c2e7', '#89dceb', '#a6e3a1', '#fab387', '#f9e2af'];
                  const color = tagColors[index % tagColors.length];
                  
                  return (
                    <Chip
                      key={index}
                      label={tag}
                      size="medium"
                      sx={{
                        backgroundColor: `${color}20`,
                        borderColor: color,
                        border: `2px solid ${color}`,
                        color: color,
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        '&:hover': {
                          backgroundColor: `${color}30`,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    />
                  );
                })}
              </Box>
              
              <Divider sx={{ 
                mb: 4, 
                borderColor: '#cba6f7', // Mauve
                borderWidth: 2,
              }} />
            </header>
            
            <Box
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
              sx={{
                '& h1, & h2, & h3, & h4, & h5, & h6': {
                  color: '#89b4fa', // Blue for headings
                  fontWeight: 600,
                  mt: 3,
                  mb: 2,
                },
                '& h1': { color: '#89b4fa' }, // Blue
                '& h2': { color: '#cba6f7' }, // Mauve
                '& h3': { color: '#f5c2e7' }, // Pink
                '& h4': { color: '#89dceb' }, // Sky
                '& h5': { color: '#a6e3a1' }, // Green
                '& h6': { color: '#fab387' }, // Peach
                '& p': {
                  color: '#cdd6f4', // Text
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  mb: 2,
                },
                '& a': {
                  color: '#89dceb', // Sky
                  textDecoration: 'none',
                  borderBottom: `2px solid transparent`,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#74c7ec', // Sapphire
                    borderBottomColor: '#74c7ec',
                  },
                },
                '& code': {
                  backgroundColor: '#181825', // Mantle
                  color: '#f5c2e7', // Pink
                  padding: '0.2rem 0.4rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.9em',
                  border: `1px solid #45475a`, // Surface 1
                },
                '& pre': {
                  backgroundColor: '#181825', // Mantle
                  border: `1px solid #45475a`, // Surface 1
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  overflow: 'auto',
                  '& code': {
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0,
                  },
                },
                '& blockquote': {
                  borderLeft: `4px solid #a6e3a1`, // Green
                  backgroundColor: '#181825', // Mantle
                  margin: '1.5rem 0',
                  padding: '1rem 1.5rem',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  '& p': {
                    color: '#bac2de', // Subtext 1
                    fontStyle: 'italic',
                  },
                },
                '& ul, & ol': {
                  '& li': {
                    color: '#cdd6f4', // Text
                    mb: 1,
                  },
                },
              }}
            />
            
            <Divider sx={{ 
              my: 4, 
              borderColor: '#cba6f7', // Mauve
              borderWidth: 2,
            }} />
            
            <footer>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                p: 3,
                backgroundColor: '#181825', // Mantle
                borderRadius: 2,
                border: `1px solid #45475a`, // Surface 1
              }}>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: '#bac2de', // Subtext 1
                    fontWeight: 500,
                  }}
                >
                  Written with ❤️ by {frontmatter.author}
                </Typography>
                
                <Button
                  component={Link}
                  to="/blog"
                  variant="outlined"
                  startIcon={<ArrowBack />}
                  sx={{
                    borderColor: '#89dceb', // Sky
                    color: '#89dceb',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      borderColor: '#74c7ec', // Sapphire
                      backgroundColor: '#74c7ec20',
                      color: '#74c7ec',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Back to Blog
                </Button>
              </Box>
            </footer>
          </article>
        </Paper>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        tags
        author
      }
    }
  }
`

export default BlogPostTemplate 