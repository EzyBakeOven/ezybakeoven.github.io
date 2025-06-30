/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navigation from "./navigation/navigation"
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Footer from "./footer"

export default function Layout({ children }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#89b4fa', // Mocha Blue
      },
      secondary: {
        main: '#f5c2e7', // Mocha Pink
      },
      background: {
        default: '#1e1e2e', // Mocha Base
        paper: '#313244',   // Mocha Surface0
      },
      text: {
        primary: '#cdd6f4', // Mocha Text
        secondary: '#bac2de', // Mocha Subtext 1
      },
      error: {
        main: '#f38ba8', // Mocha Red
      },
      warning: {
        main: '#fab387', // Mocha Peach
      },
      info: {
        main: '#89dceb', // Mocha Sky
      },
      success: {
        main: '#a6e3a1', // Mocha Green
      },
    },
    typography: {
      fontFamily: [
        'Inter',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: { fontWeight: 700, fontSize: '2.25rem', '@media (max-width:600px)': { fontSize: '1.5rem' } },
      h2: { fontWeight: 600, fontSize: '1.5rem', '@media (max-width:600px)': { fontSize: '1.25rem' } },
      body1: { fontSize: '1rem', '@media (max-width:600px)': { fontSize: '0.95rem' } },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
