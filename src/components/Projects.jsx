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
    const handleMouseEnter = (e) => {
        setIsHovered(true);
    };

    const handleMouseLeave = (e) => {
        setIsHovered(false);
    };

    const [issHovered, setIssHovered] = useState(false);
    const handdleMouseEnter = (e) => {
        setIssHovered(true);
    };

    const handdleMouseLeave = (e) => {
        setIssHovered(false);
    };

    const [isssHovered, setIsssHovered] = useState(false);
    const handddleMouseEnter = (e) => {
        setIsssHovered(true);
    };

    const handddleMouseLeave = (e) => {
        setIsssHovered(false);
    };

    const [issssHovered, setIssssHovered] = useState(false);
    const handdddleMouseEnter = (e) => {
        setIssssHovered(true);
    };

    const handdddleMouseLeave = (e) => {
        setIssssHovered(false);
    };

    return (
        <div style={{
            justifyContent: "center",
            alignItems: "baseline",
            flexDirection: "row",
            alignContent: "center",
        }}>

            <h1 style={{
                fontSize: "3em",
                textAlign: "center",
                fontFamily: "Copperplate, Copperplate Gothic Light, fantasy"
            }}>
                PROJECTS
            </h1>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 30
            }}>
                <div style={{
                    
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    alignContent: "center",
                    marginRight: "163px"
                }}>
                    <Card
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            width: 500, height: 375, marginBottom: 40, backgroundColor: "#FFE4C4"
                        }}>
                        <h1 style={{
                            textAlign: "center",
                            fontFamily: "Trebuchet MS, sans-serif"
                        }}>Todo Application</h1>
                        {
                            !isHovered ? (
                                <img src={todoPic} alt="" style={{ width: 500, height: "auto" }} />
                            ) : (
                                <CardMedia
                                    component="video"
                                    autoPlay={isHovered}
                                    loop
                                    muted
                                    src={todoVid}
                                    controls={isHovered}
                                    style={{ display: isHovered ? 'block' : 'none' }}
                                />
                            )
                        }
                        <a href="https://github.com/divy1607/react-todo-app" target="_blank"> <h3 style={{ textAlign: "center", fontFamily: "Monaco, monospace" }}>source code</h3></a>
                    </Card>
                    <Card
                        onMouseEnter={handdleMouseEnter}
                        onMouseLeave={handdleMouseLeave}
                        style={{
                            width: 500, height: 375, marginBottom: 20, backgroundColor: "#FFE4C4"
                        }}>
                        <h1 style={{
                            textAlign: "center",
                            fontFamily: "Trebuchet MS, sans-serif"
                        }}>E Commerce Dashboard *</h1>
                        <img src={ecomPic} alt="" style={{ width: 500, height: "auto" }} />
                        <a href="https://github.com/divy1607/next" target="_blank"> <h3 style={{ textAlign: "center", fontFamily: "Monaco, monospace" }}>source code</h3></a>
                    </Card>
                </div>
                <div style={{
                    
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    alignContent: "center",
                    marginLeft: "163px"
                }}>
                    <Card
                        onMouseEnter={handddleMouseEnter}
                        onMouseLeave={handddleMouseLeave}
                        style={{
                            width: 500, height: 375, marginBottom: 40, backgroundColor: "#FFE4C4"
                        }}>
                        <h1 style={{
                            textAlign: "center",
                            fontFamily: "Trebuchet MS, sans-serif"
                        }}>Course Selling Application</h1>
                        {
                            !isssHovered ? (
                                <img src={coursePic} alt="" style={{ width: 500, height: "auto" }} />
                            ) : (
                                <CardMedia
                                    component="video"
                                    autoPlay={isssHovered}
                                    loop
                                    muted
                                    src={courseVid}
                                    controls={isssHovered}
                                    style={{ display: isssHovered ? 'block' : 'none' }}
                                />
                            )
                        }
                        <a href="https://github.com/divy1607/react-course-app" target="_blank"> <h3 style={{ textAlign: "center", fontFamily: "Monaco, monospace" }}>source code</h3></a>
                    </Card>
                    <Card
                        onMouseEnter={handdddleMouseEnter}
                        onMouseLeave={handdddleMouseLeave}
                        style={{
                            width: 500, height: 375, marginBottom: 20, backgroundColor: "#FFE4C4"
                        }}>
                        <h1 style={{
                            textAlign: "center",
                            fontFamily: "Trebuchet MS, sans-serif"
                        }}>Calculator App *</h1>
                        <img src={calcPic} alt="" style={{ width: 500, height: "auto" }} />
                        <a href="https://github.com/divy1607/simple-calculator-app" target="_blank"> <h3 style={{ textAlign: "center", fontFamily: "Monaco, monospace" }}>source code</h3></a>
                    </Card>
                </div>
            </div>
            <h6 style={{ fontFamily: "Courier, monospace", textAlign: "center" }}>*these projects were built on another OS so video demonstration is not possible, you can checkout the soruce code anyways :D</h6>
            <br />
            <h1 style={{
                textAlign: "center",
                fontSize: "3em",
                fontFamily: "Verdana, sans-serif"
            }}>Tech Stack</h1>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div style={{ marginRight: 30 }}>
                    <Badge color="secondary">
                        <Mongo />
                    </Badge>
                </div>
                <div style={{ marginRight: 30 }}>
                    <Badge color="secondary">
                        <Express />
                    </Badge>
                </div>
                <div style={{ marginRight: 30 }}>
                    <Badge color="secondary">
                        <React />
                    </Badge>
                </div>
                <div style={{ marginRight: 30 }}>
                    <Badge color="secondary">
                        <Node />
                    </Badge>
                </div>
                <div style={{ marginRight: 30 }}>
                    <Badge color="secondary">
                        <Next />
                    </Badge>
                </div>
                <div>
                    <Badge color="secondary">
                        <Recoil />
                    </Badge>
                </div>
                <div>
                    <Badge color="secondary">
                        <Typescript />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

function Mongo() {
    return <img src={mongoPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Express() {
    return <img src={expressPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function React() {
    return <img src={reactPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Node() {
    return <img src={nodePic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Next() {
    return <img src={nextPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Recoil() {
    return <img src={recoilPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Typescript() {
    return <img src={typePic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

export default Projects