import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function Experience() {
  const theme = useTheme();

  const contentBackground =
    theme.palette.mode === "light" ? "#F0C4B8" : "#4A5052";
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
        WORK EXPERIENCE
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.4rem",
          width: "100%",
        }}
      >
        {[
          {
            title: "Web Developer Intern",
            company: "MapIT.ai",
            period: "May 2024 - July 2024",
            details: [
              "Worked closely with a team of 3 on frontend of the web application of Makerspace Information System (MIS) Project.",
              "Implemented unique frontend features in the MIS project to effectively manage various laboratory operations.",
              "Developed pages using React.js, babel, and react-formik, enhancing form handling and user interactions.",
              "Integrated REST APIs with axios for dynamic data fetching and used Redux for efficient state management.",
            ],
          },
          {
            title: "Frontend Developer Intern",
            company: "Growhut",
            period: "June 2024 - June 2024",
            details: [
              "Worked closely with a team of 3 on frontend of web application of DRCFO and SIS Project in a virtual office (Roam).",
              "Developed multiple pages from scratch using React.js for DRCFO and SIS projects, ensuring robust features.",
              "Engineered the DRCFO analytics page with real-time data analysis using react-chartjs and Tailwind CSS.",
              "Fixed bugs and enhanced UI aesthetics with Material UI, ensuring responsiveness for the DRCFO website.",
            ],
          },
          {
            title: "Quantitative Research Consultant",
            company: "WorldQuant BRAIN",
            period: "January 2024 - June 2024",
            details: [
              "Developed robust quantitative research models called alphas to enhance trading strategies across global financial markets.",
              "Performed market trend analysis, extracting actionable insights from large datasets using statistical techniques.",
              "Backtested alphas on 10 years of past data, producing in-sample metrics for rigorous out-of-sample validation.",
              "Utilized ACE library built on BRAIN API, leveraging ML models to generate predictive alphas efficiently.",
            ],
          },
        ].map((experience, index) => (
          <Box
            key={index}
            sx={{
              background: contentBackground,
              color: textColor,
              borderRadius: "10.5px",
              boxShadow: "0 2.8px 14px rgba(0, 0, 0, 0.1)",
              padding: { xs: "14px", md: "21px" },
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.014)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: { xs: "1.05rem", md: "1.26rem" },
                marginBottom: "0.35rem",
              }}
            >
              {experience.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: { xs: "0.84rem", md: "0.98rem" },
                color: theme.palette.text.secondary,
                marginBottom: "0.35rem",
              }}
            >
              {experience.company}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: { xs: "0.7rem", md: "0.77rem" },
                color: theme.palette.text.secondary,
                marginBottom: "0.7rem",
              }}
            >
              {experience.period}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: { xs: "0.63rem", md: "0.7rem" },
                lineHeight: 1.6,
              }}
            >
              {experience.details.map((detail, idx) => (
                <React.Fragment key={idx}>
                  - {detail} <br />
                </React.Fragment>
              ))}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Experience;
