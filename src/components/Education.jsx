import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, useTheme } from "@mui/material";

function Education() {
  const theme = useTheme(); // Access the theme for consistent colors

  // Define colors based on the theme mode (light/dark)
  const contentBackground =
    theme.palette.mode === "light" ? "#F0C4B8" : "#4A5052"; // Soft peach / Dark charcoal variant
  const iconBackground = theme.palette.primary.main; // #5C5470 (light) or #A69CAC (dark)
  const textColor = theme.palette.text.primary;

  return (
    <Box
      sx={{
        padding: { xs: "14px", md: "28px" },
        maxWidth: "840px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1.4em", sm: "1.75em", md: "2.1em" },
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          color: textColor,
          textAlign: "center",
          marginBottom: "1.4rem",
          letterSpacing: "1.4px",
          textShadow:
            theme.palette.mode === "light"
              ? "1.4px 1.4px 2.8px rgba(47, 46, 65, 0.1)"
              : "1.4px 1.4px 2.8px rgba(237, 237, 237, 0.1)",
        }}
      >
        EDUCATION
      </Typography>

      <VerticalTimeline lineColor={theme.palette.secondary.main}>
        {" "}
        {/* Matches button colors */}
        {[
          {
            date: "2017-18",
            title: "Senior Secondary Certificate",
            board: "Central Board of Secondary Education",
            score: "93.6%",
          },
          {
            date: "2019-20",
            title: "Higher Secondary Certificate",
            board: "Central Board of Secondary Education",
            score: "92%",
          },
          {
            date: "2021-present",
            title: "Bachelor of Technology",
            board: "Engineering Physics",
            score: "Indian Institute of Technology, Bombay",
          },
        ].map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: contentBackground,
              color: textColor,
              borderRadius: "10px",
              boxShadow: "0 2.8px 14px rgba(0, 0, 0, 0.1)",
              padding: "14px",
              transition: "transform 0.3s ease",
            }}
            contentArrowStyle={{
              borderRight: `5px solid ${contentBackground}`,
            }}
            iconStyle={{
              background: iconBackground,
              color: "#fff",
              boxShadow: `0 0 0 2.8px ${theme.palette.secondary.main}`,
            }}
            date={edu.date}
            dateClassName="date-style"
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.12rem",
                fontWeight: 600,
                textAlign: "center",
                marginBottom: "0.35rem",
              }}
            >
              {edu.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: "0.98rem",
                fontWeight: 500,
                textAlign: "center",
                marginBottom: "0.35rem",
              }}
            >
              {edu.board}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "0.84rem", fontWeight: 400, textAlign: "center" }}
            >
              {edu.score}
            </Typography>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Custom CSS for date styling */}
      <style jsx global>{`
        .date-style {
          font-family: "Roboto", sans-serif !important;
          font-size: clamp(0.7rem, 1.4vw, 0.84rem) !important;
          color: ${textColor} !important;
          font-weight: 500 !important;
        }
      `}</style>
    </Box>
  );
}

export default Education;
