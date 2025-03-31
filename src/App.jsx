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
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import ProgressBar from "./components/ProgressBar.jsx"; // Import the ProgressBar component

import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import jokerPic from './assets/joker.jpg';
import divy1Pic from './assets/divy1.jpg';

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
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 700,
      },
      h2: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 600,
      },
      h3: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
      },
      button: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
      },
      body1: {
        fontFamily: "'Roboto', sans-serif",
      },
      body2: {
        fontFamily: "'Roboto', sans-serif",
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
  const expRef = useRef(null);
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
              top: 27, // Adjusted for ProgressBar height (12px)
              right: 60,
              zIndex: 1100,
              color: theme.palette.text.primary
            }}
          >
            <MenuIcon />
          </Button>
          <IconButton 
            onClick={colorMode.toggleColorMode}
            style={{
              position: 'fixed',
              top: 22, // Adjusted for ProgressBar height (12px)
              right: 10,
              zIndex: 1100,
              backgroundColor: mode === 'light' ? '#DBA39A20' : '#E8A9A920',
            }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
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
                marginTop: '12px', // Adjusted for ProgressBar height
              },
            }}
          >
            <List>
              {[
                { text: 'Home', ref: homeRef },
                { text: 'Experience', ref: expRef },
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
                      fontFamily: "'Roboto', sans-serif",
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
      <Grid container alignItems="center" justifyContent="space-between" sx={{ flexWrap: 'nowrap' }}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
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
                src={divy1Pic}
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
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <h1 style={{
            textAlign: "center",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "2.8rem",
            fontWeight: 700,
            color: theme.palette.text.primary,
            letterSpacing: "2px",
            textShadow: theme.palette.mode === 'light' 
              ? '2px 2px 4px rgba(47, 46, 65, 0.1)' 
              : '2px 2px 4px rgba(237, 237, 237, 0.1)',
            marginLeft: 100,
          }}>
            THE WAY I AM
          </h1>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <div style={{
            display: "flex", 
            justifyContent: "flex-end",
            alignItems: "center", // Changed to center for better alignment
            flexWrap: 'nowrap',
          }}>
            <IconButton 
              sx={{
                mr: 2, 
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
              gap: '15px',
              flexWrap: 'nowrap',
            }}>
              <Button
                onClick={() => scrollToComponent(expRef)}
                variant="text"
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: theme.palette.mode === 'light' ? '#DBA39A20' : '#E8A9A920',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    background: theme.palette.mode === 'light' ? '#DBA39A40' : '#E8A9A940',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Experience
              </Button>
              <Button
                onClick={() => scrollToComponent(abRef)}
                variant="text"
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: theme.palette.mode === 'light' ? '#DBA39A20' : '#E8A9A920',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    background: theme.palette.mode === 'light' ? '#DBA39A40' : '#E8A9A940',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToComponent(divRef)}
                variant="text"
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: theme.palette.mode === 'light' ? '#DBA39A20' : '#E8A9A920',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    background: theme.palette.mode === 'light' ? '#DBA39A40' : '#E8A9A940',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Education
              </Button>
              <Button
                variant="contained"
                onClick={() => scrollToComponent(suggRef)}
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '8px 24px',
                  borderRadius: '20px',
                  background: theme.palette.mode === 'light'
                    ? 'linear-gradient(45deg, #DBA39A, #A8A2B9)'
                    : 'linear-gradient(45deg, #E8A9A9, #8B95A1)',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
                  },
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
          backgroundImage: uniformGradient,
          backgroundAttachment: 'fixed',
          color: theme.palette.text.primary,
        }}>
          {/* Add the ProgressBar at the top */}
          <ProgressBar />

          <div style={{
            background: mode === 'light'
              ? 'linear-gradient(180deg, #FFFFFF, #FAF0E6CC)'
              : 'linear-gradient(180deg, #2A3032CC, #1F2526CC)',
            position: "fixed",
            width: "100%",
            top: 12, // Offset by the height of the ProgressBar (12px)
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
            { ref: expRef, component: <Experience /> },
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
                padding: isMobile ? "152px 20px 80px" : "112px 0 60px", // Adjusted padding to account for ProgressBar height (12px)
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {section.component}
            </div>
          ))}

          <div style={{
            backgroundImage: uniformGradient,
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
  );
}

export default App;