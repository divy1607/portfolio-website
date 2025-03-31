import React from "react";
import Typewriter from "typewriter-effect";
import { Box, Typography, Badge } from "@mui/material";
import divy2Pic from "../assets/divy2.png";
import linkedPic from "../assets/icons8-linkedin-50.png";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "840px",
        margin: "0 auto",
        padding: { xs: "14px", md: "28px" },
        gap: { xs: "1.4rem", md: "2.8rem" },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "14px",
          minWidth: 0,
        }}
      >
        <img
          src={divy2Pic}
          alt="Divyansh"
          style={{
            width: "52.5%",
            height: "7%",
            maxWidth: { xs: "140px", sm: "175px", md: "210px" },
            height: "auto",
            borderRadius: "50%",
            boxShadow: "0 2.8px 14px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.21s ease, transform 0.21s ease",
            "&:hover": {
              boxShadow: "0 4.2px 17.5px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.035)",
            },
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minWidth: 0,
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.8rem" },
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
            fontSize: { xs: "0.84rem", sm: "1.05rem", md: "1.26rem" },
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            color: "#00ffee",
            minHeight: "1.4em",
            marginTop: "0.7rem",
          }}
        >
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("A dreamer")
                .pauseFor(700)
                .deleteAll()
                .typeString("A developer")
                .pauseFor(700)
                .deleteAll()
                .typeString("Entrepreneurship Enthusiast")
                .pauseFor(700)
                .deleteAll()
                .typeString("A batman :P")
                .start();
            }}
          />
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.7rem", sm: "0.77rem", md: "0.84rem" },
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            color: "text.secondary",
            marginTop: "1.05rem",
            maxWidth: "420px",
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
            fontSize: { xs: "0.63rem", sm: "0.7rem" },
            fontFamily: "'Roboto', sans-serif",
            fontStyle: "italic",
            color: "text.secondary",
            marginTop: "0.35rem",
          }}
        >
          (PS: I think my taste in music is great! :p)
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            marginTop: "1.05rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "0.77rem", sm: "0.84rem", md: "0.91rem" },
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
          width: { xs: "17.5px", sm: "21px" },
          height: "auto",
        }}
      />
    </a>
  );
}

export default Home;
