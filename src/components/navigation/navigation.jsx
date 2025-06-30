import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.background.paper, backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Matt Hoy
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            sx={{ 
              '&:hover': { 
                backgroundColor: (theme) => theme.palette.action.hover 
              } 
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/blog"
            sx={{ 
              '&:hover': { 
                backgroundColor: (theme) => theme.palette.action.hover 
              } 
            }}
          >
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 