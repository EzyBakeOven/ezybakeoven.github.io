import React from "react"
import { graphql, Link } from "gatsby"
import { Typography, Container, Box, Chip, Divider, Button } from "@mui/material"
import { CalendarToday, Person, ArrowBack } from "@mui/icons-material"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post

  return (
    <Layout>
      <SEO 
        title={frontmatter.title}
        description={frontmatter.description}
        article={true}
      />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button
          component={Link}
          to="/blog"
          startIcon={<ArrowBack />}
          sx={{ mb: 3 }}
        >
          Back to Blog
        </Button>
        
        <article>
          <header>
            <Typography variant="h2" component="h1" gutterBottom>
              {frontmatter.title}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CalendarToday sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary" sx={{ mr: 3 }}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
              
              <Person sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {frontmatter.author}
              </Typography>
            </Box>
            
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              {frontmatter.description}
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {frontmatter.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Box>
            
            <Divider sx={{ mb: 4 }} />
          </header>
          
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              lineHeight: 1.7,
              fontSize: '1.1rem',
            }}
          />
          
          <Divider sx={{ my: 4 }} />
          
          <footer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Written by {frontmatter.author}
              </Typography>
              
              <Button
                component={Link}
                to="/blog"
                variant="outlined"
                startIcon={<ArrowBack />}
              >
                Back to Blog
              </Button>
            </Box>
          </footer>
        </article>
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