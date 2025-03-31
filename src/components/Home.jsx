import React from "react";
import Typewriter from "typewriter-effect";
import { Box, Typography, Badge } from "@mui/material";
import divyPhoto from "../assets/c977b6ac-e9c2-40f6-835c-1ce07dc571ac.jpg";
import divy2Pic from "../assets/divy2.png";
import linkedPic from "../assets/icons8-linkedin-50.png";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { xs: "20px", md: "40px" },
        gap: { xs: "2rem", md: "4rem" }, // Responsive gap between text and image
        boxSizing: "border-box",
      }}
    >
      {/* Image Section */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          minWidth: 0, // Prevents overflow
        }}
      >
        <img
          src={divy2Pic}
          alt="Divyansh"
          style={{
            width: "75%",
            height: "10%",
            maxWidth: { xs: "200px", sm: "250px", md: "300px" }, // Responsive image size
            height: "auto",
            borderRadius: "50%",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
            "&:hover": {
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minWidth: 0, // Prevents overflow
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" }, // Responsive font size
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            color: "text.primary",
            lineHeight: 1.2,
          }}
        >
          Hi, I'm <span style={{ color: "#e5b59e" }}>Divyansh</span>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            color: "#00ffee",
            minHeight: "2em", // Ensures consistent height for typewriter
            marginTop: "1rem",
          }}
        >
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("A dreamer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("A developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Entrepreneurship Enthusiast")
                .pauseFor(1000)
                .deleteAll()
                .typeString("A batman :P")
                .start();
            }}
          />
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            color: "text.secondary",
            marginTop: "1.5rem",
            maxWidth: "600px",
          }}
        >
          A tech head, exploring the realms of science and technology. <br />
          Welcome to my portfolio! You'll see my professional experience, self
          projects and educational background here. <br />
          Apart from that, I like working on simple solutions to complex
          problems. You will most probably find me sleeping, watching cool
          physics stuff online, watching American sitcoms, or programming. Can
          help you with designs, codes, and physics, or can recommend great
          shows and music.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontFamily: "'Roboto', sans-serif",
            fontStyle: "italic",
            color: "text.secondary",
            marginTop: "0.5rem",
          }}
        >
          (PS: I think my taste in music is great! :p)
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1.5rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              color: "text.primary",
            }}
          >
            Let's connect
          </Typography>
          <Badge color="secondary">
            <LinkedIn />
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/divyansh-tripathi-7a1141242/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={linkedPic}
        alt="LinkedIn"
        style={{
          width: { xs: "25px", sm: "30px" }, // Responsive icon size
          height: "auto",
        }}
      />
    </a>
  );
}

export default Home;
