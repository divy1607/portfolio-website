import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function Experience() {
  const theme = useTheme();

  // Define colors based on the theme mode (light/dark)
  const contentBackground = theme.palette.mode === 'light' ? '#F0C4B8' : '#4A5052'; // Matches Education.jsx
  const textColor = theme.palette.text.primary;

  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '40px' },
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2em', sm: '2.5em', md: '3em' },
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          color: textColor,
          textAlign: 'center',
          marginBottom: '2rem',
          letterSpacing: '2px',
          textShadow: theme.palette.mode === 'light'
            ? '2px 2px 4px rgba(47, 46, 65, 0.1)'
            : '2px 2px 4px rgba(237, 237, 237, 0.1)',
        }}
      >
        WORK EXPERIENCE
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%',
        }}
      >
        {/* Experience Entry 1 */}
        <Box
          sx={{
            background: contentBackground,
            color: textColor,
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: { xs: '20px', md: '30px' },
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              marginBottom: '0.5rem',
            }}
          >
            Web Developer Intern
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              color: theme.palette.text.secondary,
              marginBottom: '0.5rem',
            }}
          >
            MapIT.ai
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: theme.palette.text.secondary,
              marginBottom: '1rem',
            }}
          >
            May 2024 - July 2024
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.6,
            }}
          >
           - Worked closely with a team of 3 on frontend of the web application of Makerspace Information System (MIS) Project. <br />
           - Implemented unique frontend features in the MIS pro ject to effectively manage various laboratory operations. <br />
           - Developed pages using React.js, babel, and react-formik, enhancing form handling and user interactions. <br />
           - Integrated REST APIs with axios for dynamic data fetching and used Redux for efficient state management. <br />
          </Typography>
        </Box>

        {/* Experience Entry 2 */}
        <Box
          sx={{
            background: contentBackground,
            color: textColor,
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: { xs: '20px', md: '30px' },
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              marginBottom: '0.5rem',
            }}
          >
            Frontend Developer Intern
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              color: theme.palette.text.secondary,
              marginBottom: '0.5rem',
            }}
          >
            Growhut
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: theme.palette.text.secondary,
              marginBottom: '1rem',
            }}
          >
            June 2024 - June 2024
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.6,
            }}
          >
            - Worked closely with a team of 3 on frontend of web application of DRCFO and SIS Project in a virtual office (Roam). <br />
            - Developed multiple pages from scratch using React.js for DRCFO and SIS projects, ensuring robust features. <br />
            - Engineered the DRCFO analytics page with real-time data analysis using react-chartjs and Tailwind CSS. <br />
            - Fixed bugs and enhanced UI aesthetics with Material UI, ensuring responsiveness for the DRCFO website. <br />
          </Typography>
        </Box>

        {/* Experience Entry #3 */}
        <Box
          sx={{
            background: contentBackground,
            color: textColor,
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: { xs: '20px', md: '30px' },
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              marginBottom: '0.5rem',
            }}
          >
            Quantitative Research Consultant
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              color: theme.palette.text.secondary,
              marginBottom: '0.5rem',
            }}
          >
            WorldQuant BRAIN
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: theme.palette.text.secondary,
              marginBottom: '1rem',
            }}
          >
            January 2024 - June 2024
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.6,
            }}
          >
            - Developed robust quantitative research models called alphas to enhance trading strategies across global financial markets. <br />
            - Performed market trend analysis, extracting actionable insights from large datasets using statistical techniques. <br />
            - Backtested alphas on 10 years of past data, producing in-sample metrics for rigorous out-of-sample validation. <br />
            - Utilized ACE library built on BRAIN API, leveraging ML models to generate predictive alphas efficiently. <br />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;