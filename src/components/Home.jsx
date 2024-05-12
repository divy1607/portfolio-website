import divyPhoto from '../assets/c977b6ac-e9c2-40f6-835c-1ce07dc571ac.jpg';
import React from 'react';
import Typewriter from "typewriter-effect";
import linkedPic from "../assets/icons8-linkedin-50.png";
import { Badge } from "@mui/material";

function Home() {
    return (<>

        <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            flexDirection: "column",
            alignContent: "center",
            width: 200,
            marginLeft: 70
        }}>
            <h1 style={{
                fontSize: "4rem",
                fontFamily: "Georgia, serif",
                fontWeight: "bold",
                textAlign: "center"
            }}>Hi, I'm <span style={{ color: "#e5b59e", marginLeft: 20 }}> Divyansh </span></h1>
            <h1 style={{
                fontFamily: "Monaco, monospace",
                color: "00ffee",
                textAlign: "center"
            }}> <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                        typewriter.typeString("A dreamer").pauseFor(1000).deleteAll().typeString("A developer").pauseFor(1000).deleteAll().typeString("Entrepreneurship Enthusiast").pauseFor(1000).deleteAll().typeString("A batman :P").start();
                    }}
                /></h1>
            <h3 style={{
                fontFamily: "Recoleta, serif",
                fontWeight: "bold",
            }}>A tech head, exploring the realms of science and technology. <br />Welcome to my portfolio! You'll see my self projects and educational background here. <br /> Apart from that, I like working on simple solutions to complex problems. You will most probably find me sleeping, watching cool physics stuff online, watching american sitcoms or programming. Can help you with designs, codes and physics, or can recommend great shows and music. <br /> <h5>(PS: I think my taste in music is great! :p) </h5> </h3>
            <h3 style={{fontFamily: "Georgia, serif", fontWeight: "bold"}}>Let's connect <Badge color="secondary">
                <LinkedIn />
            </Badge></h3>
        </div>
        <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"

        }}>
            <img src={divyPhoto} alt="" style={{
                width: 300,
                height: "auto",
                borderRadius: "50%",
                boxShadow: " rgba(0, 0, 0, 0.5)",
                transition: "box-shadow 0.3 ease"
            }} />
        </div>
    </>

    )
}

function LinkedIn() {
    return <a href="https://www.linkedin.com/in/divyansh-tripathi-7a1141242/" target='_blank'><img src={linkedPic} alt="linkedIn" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

export default Home;