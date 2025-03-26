import React, { useRef, useState, useMemo, useEffect } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  useMediaQuery, 
  useTheme, 
  CssBaseline 
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx"
import Footer from "./components/Footer.jsx"

import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import jokerPic from './assets/joker.jpg';

export const ColorModeContext = React.createContext({ 
  toggleColorMode: () => {} 
});

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return savedMode || 'light';
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newMode = e.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme-mode')) {
        setMode(newMode);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'light' 
        ? {
            primary: {
              main: '#5C5470',
              light: '#8A829C',
              dark: '#352F44',
            },
            secondary: {
              main: '#DBA39A',
              light: '#F0C4B8',
              dark: '#B77E6D',
            },
            background: {
              default: '#FAF0E6',
              paper: '#FFFFFF',
            },
            text: {
              primary: '#2F2E41',
              secondary: 'rgba(47, 46, 65, 0.7)',
            },
            accent: {
              main: '#A8A2B9',
            },
          }
        : {
            primary: {
              main: '#A69CAC',
              light: '#C9BCD2',
              dark: '#756B83',
            },
            secondary: {
              main: '#E8A9A9',
              light: '#F4CACA',
              dark: '#D07A7A',
            },
            background: {
              default: '#1F2526',
              paper: '#2A3032',
            },
            text: {
              primary: '#EDEDED',
              secondary: 'rgba(237, 237, 237, 0.7)',
            },
            accent: {
              main: '#8B95A1',
            },
          }),
    },
    typography: {
      fontFamily: "'Lora', 'Playfair Display', serif",
      h1: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 600,
      },
      button: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '30px',
            padding: '8px 24px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: mode === 'light' 
              ? 'linear-gradient(145deg, #FAF0E6, #FFFFFF)' 
              : 'linear-gradient(145deg, #2A3032, #1F2526)',
            borderLeft: `1px solid ${mode === 'light' ? '#DBA39A' : '#E8A9A9'}`,
          },
        },
      },
    },
  }), [mode]);

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => {
        const newMode = prevMode === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme-mode', newMode);
        return newMode;
      });
    },
  }), []);

  const suggRef = useRef(null);
  const abRef = useRef(null);
  const divRef = useRef(null);
  const homeRef = useRef(null);

  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.down('md'));

  const scrollToComponent = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderNavigation = () => {
    if (isMobile) {
      return (
        <>
          <Button 
            onClick={handleDrawerToggle}
            style={{
              position: 'fixed',
              top: 15,
              right: 15,
              zIndex: 1100,
              color: theme.palette.text.primary
            }}
          >
            <MenuIcon />
          </Button>
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 260,
                padding: '20px',
              },
            }}
          >
            <List>
              {[
                { text: 'Home', ref: homeRef },
                { text: 'Projects', ref: abRef },
                { text: 'Education', ref: divRef },
                { text: 'Contact', ref: suggRef }
              ].map((item) => (
                <ListItem 
                  button 
                  key={item.text}
                  onClick={() => scrollToComponent(item.ref)}
                  sx={{
                    margin: '10px 0',
                    borderRadius: '15px',
                    '&:hover': {
                      backgroundColor: mode === 'light' ? '#F0C4B8' : '#4A5052',
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      );
    }

    return (
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item lg={3} md={3} sm={12}>
          <div style={{ 
            marginLeft: 30, 
            display: 'flex', 
            alignItems: 'center',
          }}>
            <Button
              variant="text"
              onClick={() => scrollToComponent(homeRef)}
              style={{ borderRadius: '50%' }}
            >
              <Avatar 
                alt="Divy"
                src={jokerPic}
                sx={{ 
                  width: 70, 
                  height: 70, 
                  border: `4px solid ${theme.palette.secondary.main}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: `0 0 15px ${theme.palette.secondary.main}40`,
                  },
                }} 
              />
            </Button>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <h1 style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "2rem" : "2.8rem",
            fontWeight: 700,
            color: theme.palette.text.primary,
            letterSpacing: "2px",
            textShadow: mode === 'light' 
              ? '2px 2px 4px rgba(47, 46, 65, 0.1)' 
              : '2px 2px 4px rgba(237, 237, 237, 0.1)',
          }}>
            THE WAY I AM
          </h1>
        </Grid>
        <Grid item lg={3} md={3} sm={12}>
          <div style={{
            display: "flex", 
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: 30,
            gap: '15px'
          }}>
            <IconButton 
              sx={{ 
                ml: 1,
                backgroundColor: mode === 'light' ? '#DBA39A20' : '#E8A9A920',
                '&:hover': {
                  backgroundColor: mode === 'light' ? '#DBA39A40' : '#E8A9A940',
                },
              }} 
              onClick={colorMode.toggleColorMode} 
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <div style={{ 
              display: "flex", 
              alignItems: 'center', 
              gap: '20px' 
            }}>
              <Button
                onClick={() => scrollToComponent(abRef)}
                variant="outlined"
                color="secondary"
                sx={{ borderWidth: 2 }}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToComponent(divRef)}
                variant="outlined"
                color="secondary"
                sx={{ borderWidth: 2 }}
              >
                Education
              </Button>
              <Button
                variant="contained"
                onClick={() => scrollToComponent(suggRef)}
                color="secondary"
                sx={{
                  background: mode === 'light'
                    ? 'linear-gradient(45deg, #DBA39A, #A8A2B9)'
                    : 'linear-gradient(45deg, #E8A9A9, #8B95A1)',
                }}
              >
                Contact me
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  };

  // Define a single uniform gradient for all sections
  const uniformGradient = mode === 'light'
    ? 'linear-gradient(135deg, #FAF0E6 0%, #A8A2B9 70%, #DBA39A 100%)'
    : 'linear-gradient(135deg, #1F2526 0%, #8B95A1 70%, #E8A9A9 100%)';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{
          width: "100%",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          backgroundImage: uniformGradient, // Apply uniform gradient to entire app
          backgroundAttachment: 'fixed', // Keeps gradient fixed while scrolling
          color: theme.palette.text.primary,
        }}>
          <div style={{
            background: mode === 'light'
              ? 'linear-gradient(180deg, #FFFFFF, #FAF0E6CC)' // Slightly transparent to blend with main gradient
              : 'linear-gradient(180deg, #2A3032CC, #1F2526CC)',
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            zIndex: 1000,
            backdropFilter: "blur(15px)",
            borderBottom: `1px solid ${mode === 'light' ? '#DBA39A20' : '#E8A9A920'}`,
          }}>
            <nav style={{
              padding: "15px 0",
              maxWidth: "1300px",
              margin: "0 auto",
              width: "100%"
            }}>
              {renderNavigation()}
            </nav>
          </div>

          {[
            { ref: homeRef, component: <Home /> },
            { ref: abRef, component: <Projects /> },
            { ref: divRef, component: <Education /> },
            { ref: suggRef, component: <Contact /> }
          ].map((section, index) => (
            <div 
              key={index}
              ref={section.ref} 
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: isMobile ? "140px 20px 80px" : "100px 0 60px",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {section.component}
            </div>
          ))}

          <div style={{
            backgroundImage: uniformGradient, // Same gradient for footer
            padding: "60px 20px",
            color: theme.palette.text.primary,
            textAlign: isMobile ? "center" : "left",
            boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.1)',
          }}>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App