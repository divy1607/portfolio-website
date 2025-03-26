import { Card, CardMedia, Badge, Button } from "@mui/material";
import todoVid from "../assets/todo1.mp4";
import courseVid from "../assets/coursera.mp4";
import { useState } from "react";
import reactPic from "../assets/react.svg";
import recoilPic from "../assets/recoil.png";
import nodePic from "../assets/nodejs.png";
import nextPic from "../assets/next.png";
import expressPic from "../assets/express.png";
import mongoPic from "../assets/mongo.png";
import typePic from "../assets/typescript.png";
import todoPic from "../assets/todo.png";
import coursePic from "../assets/coursera.png";
import ecomPic from "../assets/e commerce.png";
import calcPic from "../assets/calculator.jpeg";

function Projects() {
    const [isHovered, setIsHovered] = useState(false);
    const [issHovered, setIssHovered] = useState(false);
    const [isssHovered, setIsssHovered] = useState(false);
    const [issssHovered, setIssssHovered] = useState(false);

    const handleMouseEnter = (e) => setIsHovered(true);
    const handleMouseLeave = (e) => setIsHovered(false);
    const handdleMouseEnter = (e) => setIssHovered(true);
    const handdleMouseLeave = (e) => setIssHovered(false);
    const handddleMouseEnter = (e) => setIsssHovered(true);
    const handddleMouseLeave = (e) => setIsssHovered(false);
    const handdddleMouseEnter = (e) => setIssssHovered(true);
    const handdddleMouseLeave = (e) => setIssssHovered(false);

    return (
        <div style={{
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <h1 style={{
                fontSize: 'clamp(2em, 5vw, 3em)',
                textAlign: 'center',
                fontFamily: 'Copperplate, Copperplate Gothic Light, fantasy',
                marginBottom: '2rem'
            }}>
                MY PROJECTS
            </h1>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '1rem'
            }}>
                <div style={{
                    flex: '1 1 300px',
                    maxWidth: '500px',
                    minWidth: '280px'
                }}>
                    <Card
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem',
                            backgroundColor: '#FFE4C4'
                        }}>
                        <h1 style={{
                            textAlign: 'center',
                            fontFamily: 'Trebuchet MS, sans-serif',
                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                            padding: '1rem 0'
                        }}>Todo Application</h1>
                        {!isHovered ? (
                            <img src={todoPic} alt="Todo App" style={{ width: '100%', height: 'auto' }} />
                        ) : (
                            <CardMedia
                                component="video"
                                autoPlay={isHovered}
                                loop
                                muted
                                src={todoVid}
                                controls={isHovered}
                                style={{ display: isHovered ? 'block' : 'none', width: '100%' }}
                            />
                        )}
                        <a href="https://github.com/divy1607/react-todo-app" target="_blank">
                            <h3 style={{ 
                                textAlign: 'center', 
                                fontFamily: 'Monaco, monospace',
                                padding: '1rem',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                            }}>source code</h3>
                        </a>
                    </Card>

                    <Card
                        onMouseEnter={handdleMouseEnter}
                        onMouseLeave={handdleMouseLeave}
                        style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem',
                            backgroundColor: '#FFE4C4'
                        }}>
                        <h1 style={{
                            textAlign: 'center',
                            fontFamily: 'Trebuchet MS, sans-serif',
                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                            padding: '1rem 0'
                        }}>E Commerce Dashboard *</h1>
                        <img src={ecomPic} alt="E-commerce" style={{ width: '100%', height: 'auto' }} />
                        <a href="https://github.com/divy1607/next" target="_blank">
                            <h3 style={{ 
                                textAlign: 'center', 
                                fontFamily: 'Monaco, monospace',
                                padding: '1rem',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                            }}>source code</h3>
                        </a>
                    </Card>
                </div>

                <div style={{
                    flex: '1 1 300px',
                    maxWidth: '500px',
                    minWidth: '280px'
                }}>
                    <Card
                        onMouseEnter={handddleMouseEnter}
                        onMouseLeave={handddleMouseLeave}
                        style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem',
                            backgroundColor: '#FFE4C4'
                        }}>
                        <h1 style={{
                            textAlign: 'center',
                            fontFamily: 'Trebuchet MS, sans-serif',
                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                            padding: '1rem 0'
                        }}>Course Selling Application</h1>
                        {!isssHovered ? (
                            <img src={coursePic} alt="Course App" style={{ width: '100%', height: 'auto' }} />
                        ) : (
                            <CardMedia
                                component="video"
                                autoPlay={isssHovered}
                                loop
                                muted
                                src={courseVid}
                                controls={isssHovered}
                                style={{ display: isssHovered ? 'block' : 'none', width: '100%' }}
                            />
                        )}
                        <a href="https://github.com/divy1607/react-course-app" target="_blank">
                            <h3 style={{ 
                                textAlign: 'center', 
                                fontFamily: 'Monaco, monospace',
                                padding: '1rem',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                            }}>source code</h3>
                        </a>
                    </Card>

                    <Card
                        onMouseEnter={handdddleMouseEnter}
                        onMouseLeave={handdddleMouseLeave}
                        style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem',
                            backgroundColor: '#FFE4C4'
                        }}>
                        <h1 style={{
                            textAlign: 'center',
                            fontFamily: 'Trebuchet MS, sans-serif',
                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                            padding: '1rem 0'
                        }}>Calculator App *</h1>
                        <img src={calcPic} alt="Calculator" style={{ width: '100%', height: 'auto' }} />
                        <a href="https://github.com/divy1607/simple-calculator-app" target="_blank">
                            <h3 style={{ 
                                textAlign: 'center', 
                                fontFamily: 'Monaco, monospace',
                                padding: '1rem',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                            }}>source code</h3>
                        </a>
                    </Card>
                </div>
            </div>

            <h6 style={{ 
                fontFamily: 'Courier, monospace', 
                textAlign: 'center',
                fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
                margin: '1rem 0'
            }}>
                *these projects were built on another OS so video demonstration is not possible, you can checkout the source code anyways :D
            </h6>

            <h1 style={{
                textAlign: 'center',
                fontSize: 'clamp(2em, 5vw, 3em)',
                fontFamily: 'Verdana, sans-serif',
                margin: '2rem 0 1rem'
            }}>Tech Stack</h1>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                padding: '1rem'
            }}>
                {[Mongo, Express, React, Node, Next, Recoil, Typescript].map((Component, index) => (
                    <div key={index} style={{ flex: '0 1 auto' }}>
                        <Badge color="secondary">
                            <Component />
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Tech stack components remain the same but with responsive sizing
function Mongo() {
    return <img src={mongoPic} alt="MongoDB" style={{ width: 'clamp(40px, 5vw, 50px)', height: 'auto' }} />
}

function Express() {
    return <img src={expressPic} alt="Express" style={{ width: 'clamp(40px, 5vw, 50px)', height: 'auto' }} />
}

function React() {
    return <img src={reactPic} alt="React" style={{ width: 'clamp(40px, 5vw, 50px)', height: 'auto' }} />
}

function Node() {
    return <img src={nodePic} alt="Node.js" style={{ width: 'clamp(40px, 5vw, 50px)', height: 'auto' }} />
}

function Next() {
    return <img src={nextPic} alt="Next.js" style={{ width: 'clamp(40px, 5vw, 50px)', height: 'auto' }} />
}

function Recoil() {
    return <img src={recoilPic} alt="Recoil" style={{ width: 'clamp(40px, 5vw, 50px)', height: 'auto' }} />
}

function Typescript() {
    return <img src={typePic} alt="TypeScript" style={{ width: 'clamp(40px, 5vw, 50px)', height: 'auto' }} />
}

export default Projects