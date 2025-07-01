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
        light: '#b4befe', // Mocha Lavender
        dark: '#74c7ec', // Mocha Sapphire
      },
      secondary: {
        main: '#f5c2e7', // Mocha Pink
        light: '#f2cdcd', // Mocha Flamingo
        dark: '#cba6f7', // Mocha Mauve
      },
      background: {
        default: '#1e1e2e', // Mocha Base
        paper: '#313244',   // Mocha Surface 0
      },
      text: {
        primary: '#cdd6f4', // Mocha Text
        secondary: '#bac2de', // Mocha Subtext 1
        disabled: '#a6adc8', // Mocha Subtext 0
      },
      error: {
        main: '#f38ba8', // Mocha Red
        light: '#eba0ac', // Mocha Maroon
      },
      warning: {
        main: '#fab387', // Mocha Peach
        light: '#f9e2af', // Mocha Yellow
      },
      info: {
        main: '#89dceb', // Mocha Sky
        light: '#74c7ec', // Mocha Sapphire
      },
      success: {
        main: '#a6e3a1', // Mocha Green
        light: '#94e2d5', // Mocha Teal
      },
      // Custom catppuccin colors
      catppuccin: {
        rosewater: '#f5e0dc',
        flamingo: '#f2cdcd',
        pink: '#f5c2e7',
        mauve: '#cba6f7',
        red: '#f38ba8',
        maroon: '#eba0ac',
        peach: '#fab387',
        yellow: '#f9e2af',
        green: '#a6e3a1',
        teal: '#94e2d5',
        sky: '#89dceb',
        sapphire: '#74c7ec',
        blue: '#89b4fa',
        lavender: '#b4befe',
        text: '#cdd6f4',
        subtext1: '#bac2de',
        subtext0: '#a6adc8',
        overlay2: '#9399b2',
        overlay1: '#7f849c',
        overlay0: '#6c7086',
        surface2: '#585b70',
        surface1: '#45475a',
        surface0: '#313244',
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
      },
      divider: '#45475a', // Mocha Surface 1
      action: {
        hover: '#45475a', // Mocha Surface 1
        selected: '#585b70', // Mocha Surface 2
        disabled: '#6c7086', // Mocha Overlay 0
        disabledBackground: '#45475a', // Mocha Surface 1
      },
    },
    typography: {
      fontFamily: [
        'Inter',
        'JetBrains Mono',
        'Fira Code',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: { 
        fontWeight: 700, 
        fontSize: '2.5rem', 
        '@media (max-width:600px)': { fontSize: '1.75rem' },
        color: '#89b4fa', // Mocha Blue
      },
      h2: { 
        fontWeight: 600, 
        fontSize: '2rem', 
        '@media (max-width:600px)': { fontSize: '1.5rem' },
        color: '#cba6f7', // Mocha Mauve
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        '@media (max-width:600px)': { fontSize: '1.25rem' },
        color: '#f5c2e7', // Mocha Pink
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        color: '#89dceb', // Mocha Sky
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
        color: '#a6e3a1', // Mocha Green
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        color: '#fab387', // Mocha Peach
      },
      body1: { 
        fontSize: '1rem', 
        '@media (max-width:600px)': { fontSize: '0.95rem' },
        lineHeight: 1.7,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 16, // More rounded, catppuccin-like
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 600,
            padding: '10px 20px',
            '&:hover': {
              transform: 'translateY(-2px)',
              transition: 'all 0.2s ease-in-out',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: '#313244', // Mocha Surface 0
            borderRadius: 16,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: '#313244', // Mocha Surface 0
            borderRadius: 16,
            border: '1px solid #45475a', // Mocha Surface 1
            '&:hover': {
              borderColor: '#585b70', // Mocha Surface 2
              transform: 'translateY(-4px)',
              transition: 'all 0.2s ease-in-out',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            fontWeight: 500,
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
