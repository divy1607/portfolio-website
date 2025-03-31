import { Card, CardMedia, Badge } from "@mui/material";
import { useState } from "react";
import reactPic from "../assets/react.svg";
import recoilPic from "../assets/recoil.png";
import nodePic from "../assets/nodejs.png";
import nextPic from "../assets/next.png";
import expressPic from "../assets/express.png";
import typePic from "../assets/typescript.png";
import blogPic from "../assets/blog.png";
import coursePic from "../assets/coursera.png";
import payPic from "../assets/payapp.png";
import ecomPic from "../assets/e commerce.png";
import pathPic from "../assets/pathfinder.png";
import calconPic from "../assets/calcon.png";
import postgrePic from "../assets/postgre.png";
import jsPic from "../assets/js.png";
import prismaPic from "../assets/prisma.png";
import shadcnPic from "../assets/shadcn.png";
import turboPic from "../assets/turborepo.png";
import tailwindPic from "../assets/tailwind.svg";

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        padding: "14px",
        maxWidth: "840px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.4em, 3.5vw, 2.1em)",
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
          marginBottom: "1.4rem",
        }}
      >
        MY PROJECTS
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(196px, 1fr))",
          gap: "1.4rem",
          justifyContent: "center",
        }}
      >
        {[
          {
            title: "Path Finder",
            img: pathPic,
            description: "Web Visualizer for DFS, BFS and Djikstra algorithm",
            link: "https://github.com/divy1607/path-finder",
          },
          {
            title: "Acme",
            img: ecomPic,
            description: "Admin Dashboard of an E Commerce business owner",
            link: "https://github.com/divy1607/next",
          },
          {
            title: "CourseX",
            img: coursePic,
            description: "Working prototype of a course selling application",
            link: "https://github.com/divy1607/react-course-app",
          },
          {
            title: "CalCon",
            img: calconPic,
            description:
              "Calculator (Scientific + Arithmetic) and Converter (unit + currency)",
            link: "https://github.com/divy1607/calcon",
          },
          {
            title: "PayApp",
            img: payPic,
            description:
              "Web App for PoC of a payment sending application via username",
            link: "https://github.com/divy1607/money-sending",
          },
          {
            title: "BlogX",
            img: blogPic,
            description: "Personal Bloggin website with analysis dashboard",
            link: "https://github.com/divy1607/blog",
          },
        ].map((project, index) => (
          <Card
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              width: "100%",
              backgroundColor: "#FFE4C4",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(0.84rem, 2.1vw, 1.05rem)",
                fontFamily: "Trebuchet MS, sans-serif",
              }}
            >
              {project.title}
            </h1>
            {hovered === index && project.vid ? (
              <CardMedia
                component="video"
                autoPlay
                loop
                muted
                src={project.vid}
                controls
                style={{ width: "100%" }}
              />
            ) : (
              <img
                src={project.img}
                alt={project.title}
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <h6>{project.description}</h6>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3
                style={{
                  fontFamily: "Monaco, monospace",
                  padding: "7px",
                  fontSize: "clamp(0.63rem, 1.4vw, 0.7rem)",
                }}
              >
                source code
              </h3>
            </a>
          </Card>
        ))}
      </div>

      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(1.4em, 3.5vw, 2.1em)",
          fontFamily: "Verdana, sans-serif",
          margin: "1.4rem 0 0.7rem",
        }}
      >
        Tech Stack
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.05rem",
          padding: "0.7rem",
        }}
      >
        {[
          Postgre,
          Express,
          React,
          Node,
          Next,
          Recoil,
          Typescript,
          Javascript,
          Prisma,
          ShadCN,
          Turborepo,
          Tailwind,
        ].map((Component, index) => (
          <div key={index} style={{ flex: "0 1 auto" }}>
            <Badge color="secondary">
              <Component />
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function Postgre() {
  return (
    <img
      src={postgrePic}
      alt="PostgreSQL"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Express() {
  return (
    <img
      src={expressPic}
      alt="Express"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function React() {
  return (
    <img
      src={reactPic}
      alt="React"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Node() {
  return (
    <img
      src={nodePic}
      alt="Node.js"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Next() {
  return (
    <img
      src={nextPic}
      alt="Next.js"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Recoil() {
  return (
    <img
      src={recoilPic}
      alt="Recoil"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Typescript() {
  return (
    <img
      src={typePic}
      alt="TypeScript"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Javascript() {
  return (
    <img
      src={jsPic}
      alt="Javascript"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Prisma() {
  return (
    <img
      src={prismaPic}
      alt="Prisma"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function ShadCN() {
  return (
    <img
      src={shadcnPic}
      alt="ShadCN"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Turborepo() {
  return (
    <img
      src={turboPic}
      alt="Turborepo"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
function Tailwind() {
  return (
    <img
      src={tailwindPic}
      alt="Tailwind"
      style={{ width: "clamp(28px, 3.5vw, 35px)", height: "auto" }}
    />
  );
}
export default Projects;
