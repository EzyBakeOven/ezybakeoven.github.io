import React from "react"
import { Paper, Typography, Box, Button, Divider, IconButton, Tooltip } from "@mui/material"
import { RssFeed, Email, GitHub, LinkedIn, NotificationsActive } from "@mui/icons-material"

const BlogSubscription = () => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        mb: 4,
        backgroundColor: '#313244', // Surface 0
        border: `1px solid #a6e3a1`, // Green accent
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: '#a6e3a1', // Green
        },
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <NotificationsActive sx={{ fontSize: 48, color: '#a6e3a1', mb: 2 }} />
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{
            color: '#a6e3a1', // Green
            fontWeight: 700,
            mb: 1,
          }}
        >
          Never Miss a Post
        </Typography>
        <Typography 
          variant="body1"
          sx={{ 
            color: '#bac2de', // Subtext 1
            mb: 3,
          }}
        >
          Stay updated with my latest thoughts on software engineering, technology, and career development
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* RSS Feed */}
        <Box sx={{ 
          textAlign: 'center',
          p: 3,
          backgroundColor: '#45475a', // Surface 1
          borderRadius: 2,
          border: `1px solid #fab387`, // Peach
          minWidth: { xs: '100%', md: '200px' },
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#585b70', // Surface 2
            transform: 'translateY(-2px)',
          },
        }}>
          <RssFeed sx={{ fontSize: 32, color: '#fab387', mb: 1 }} />
          <Typography 
            variant="h6" 
            sx={{ color: '#fab387', fontWeight: 600, mb: 1 }}
          >
            RSS Feed
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: '#bac2de', mb: 2 }}
          >
            Subscribe with your favorite RSS reader
          </Typography>
          <Button
            href="/rss.xml"
            target="_blank"
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#fab387',
              color: '#fab387',
              '&:hover': {
                borderColor: '#fab387',
                backgroundColor: '#fab38720',
              },
            }}
          >
            Subscribe
          </Button>
        </Box>

        {/* Social Media */}
        <Box sx={{ 
          textAlign: 'center',
          p: 3,
          backgroundColor: '#45475a', // Surface 1
          borderRadius: 2,
          border: `1px solid #89dceb`, // Sky
          minWidth: { xs: '100%', md: '200px' },
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#585b70', // Surface 2
            transform: 'translateY(-2px)',
          },
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 1 }}>
            <IconButton
              href="https://github.com/ezybakeoven"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#89dceb' }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#89dceb' }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Typography 
            variant="h6" 
            sx={{ color: '#89dceb', fontWeight: 600, mb: 1 }}
          >
            Follow Me
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: '#bac2de', mb: 2 }}
          >
            Get updates on GitHub & LinkedIn
          </Typography>
          <Button
            href="https://github.com/ezybakeoven"
            target="_blank"
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#89dceb',
              color: '#89dceb',
              '&:hover': {
                borderColor: '#89dceb',
                backgroundColor: '#89dceb20',
              },
            }}
          >
            Follow
          </Button>
        </Box>

        {/* Email Newsletter (Future) */}
        <Box sx={{ 
          textAlign: 'center',
          p: 3,
          backgroundColor: '#45475a', // Surface 1
          borderRadius: 2,
          border: `1px solid #f5c2e7`, // Pink
          minWidth: { xs: '100%', md: '200px' },
          opacity: 0.7,
          position: 'relative',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#585b70', // Surface 2
            transform: 'translateY(-2px)',
            opacity: 0.9,
          },
        }}>
          <Email sx={{ fontSize: 32, color: '#f5c2e7', mb: 1 }} />
          <Typography 
            variant="h6" 
            sx={{ color: '#f5c2e7', fontWeight: 600, mb: 1 }}
          >
            Email Newsletter
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: '#bac2de', mb: 2 }}
          >
            Direct updates to your inbox
          </Typography>
          <Tooltip title="Coming Soon!" arrow>
            <span>
              <Button
                variant="outlined"
                size="small"
                disabled
                sx={{
                  borderColor: '#f5c2e7',
                  color: '#f5c2e7',
                  '&.Mui-disabled': {
                    borderColor: '#f5c2e780',
                    color: '#f5c2e780',
                  },
                }}
              >
                Coming Soon
              </Button>
            </span>
          </Tooltip>
          <Box sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: '#f9e2af', // Yellow
            color: '#1e1e2e', // Base
            px: 1,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.7rem',
            fontWeight: 600,
          }}>
            SOON
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 3, borderColor: '#585b70' }} />

      <Box sx={{ textAlign: 'center' }}>
        <Typography 
          variant="body2" 
          sx={{ color: '#6c7086', fontStyle: 'italic' }}
        >
          Choose your preferred way to stay updated with new posts and insights
        </Typography>
      </Box>
    </Paper>
  )
}

export default BlogSubscription 