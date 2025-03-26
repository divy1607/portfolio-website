import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, Typography, useTheme } from '@mui/material';

function Education() {
  const theme = useTheme(); // Access the theme for consistent colors

  // Define colors based on the theme mode (light/dark)
  const contentBackground = theme.palette.mode === 'light' ? '#F0C4B8' : '#4A5052'; // Soft peach / Dark charcoal variant
  const iconBackground = theme.palette.primary.main; // #5C5470 (light) or #A69CAC (dark)
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
        EDUCATION
      </Typography>

      <VerticalTimeline lineColor={theme.palette.secondary.main}> {/* Matches button colors */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: contentBackground,
            color: textColor,
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
          contentArrowStyle={{ borderRight: `7px solid ${contentBackground}` }}
          iconStyle={{ 
            background: iconBackground, 
            color: '#fff',
            boxShadow: `0 0 0 4px ${theme.palette.secondary.main}`,
          }}
          date="2017-18"
          dateClassName="date-style"
        >
          <Typography variant="h4" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, textAlign: 'center', marginBottom: '0.5rem' }}>
            Senior Secondary Certificate
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, textAlign: 'center', marginBottom: '0.5rem' }}>
            Central Board of Secondary Education
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, textAlign: 'center' }}>
            93.6%
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: contentBackground,
            color: textColor,
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            transition: 'transform 0.3s ease',
          }}
          contentArrowStyle={{ borderRight: `7px solid ${contentBackground}` }}
          iconStyle={{ 
            background: iconBackground, 
            color: '#fff',
            boxShadow: `0 0 0 4px ${theme.palette.secondary.main}`,
          }}
          date="2019-20"
          dateClassName="date-style"
        >
          <Typography variant="h4" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, textAlign: 'center', marginBottom: '0.5rem' }}>
            Higher Secondary Certificate
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, textAlign: 'center', marginBottom: '0.5rem' }}>
            Central Board of Secondary Education
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, textAlign: 'center' }}>
            92%
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: contentBackground,
            color: textColor,
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            transition: 'transform 0.3s ease',
          }}
          contentArrowStyle={{ borderRight: `7px solid ${contentBackground}` }}
          iconStyle={{ 
            background: iconBackground, 
            color: '#fff',
            boxShadow: `0 0 0 4px ${theme.palette.secondary.main}`,
          }}
          date="2021-present"
          dateClassName="date-style"
        >
          <Typography variant="h4" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, textAlign: 'center', marginBottom: '0.5rem' }}>
            Bachelor of Technology
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, textAlign: 'center', marginBottom: '0.5rem' }}>
            Engineering Physics
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, textAlign: 'center' }}>
            Indian Institute of Technology, Bombay
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Custom CSS for date styling */}
      <style jsx global>{`
        .date-style {
          font-family: 'Roboto', sans-serif !important;
          font-size: clamp(1rem, 2vw, 1.2rem) !important;
          color: ${textColor} !important;
          font-weight: 500 !important;
        }
      `}</style>
    </Box>
  );
}

export default Education;