import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx"
import Footer from "./components/Footer.jsx"
import { useRef } from 'react';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import jokerPic from './assets/joker.jpg';



function App() {

  const suggRef = useRef(null);
  const abRef = useRef(null);
  const divRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToComponent = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
     
    }}
    >
      <div style={{
        backgroundColor: "rgba(255, 99, 71, 0.2)",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        justifyContent: "space-between",
        zIndex: 3
      }}>
        <nav style={{
          top: 0
        }}>
          <Grid container>
            <Grid item lg={4} md={4} sm={12}>

              <div style={{ marginLeft: 10 }} >
                <Button
                  variant={"text"}
                  onClick={() => scrollToComponent(homeRef)}
                > <Avatar alt="Divy"
                  src={jokerPic}
                  sx={{ width: 56, height: 56 }} /> </Button>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>

              <h1 style={{
                textAlign: "center",
                fontFamily: "Copperplate, Copperplate Gothic Light, fantasy"
                }}>
                THE WAY I AM
              </h1>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <div style={{
                display: "flex",
                justifyContent: "right",
              }}>
                <div style={{ justifyContent: "right", marginRight: 10, display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      onClick={() => scrollToComponent(abRef)}
                      variant={"text"}
                      color="secondary"
                    > <h4>Projects</h4></Button>
                  </div>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      onClick={() => scrollToComponent(divRef)}
                      variant={"text"}
                      color="secondary"
                    > <h4>Education</h4></Button>
                  </div>
                  <Button
                    variant={"text"}
                    onClick={() => scrollToComponent(suggRef)}
                    color="secondary"
                  > <h4>Contact me </h4></Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </nav>
      </div>
      <br /><br />
      <div ref={homeRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(to bottom right,#ceffff, #ce85ff)",
          zIndex: -1,
          marginTop: 30
        }}>
        <Home></Home>
      </div>

      <div ref={abRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(to bottom right,#ceff1f, #2cf8ef)",
        }}>
        <Projects />
      </div>

      <div ref={divRef}
        style={{
          backgroundImage: "linear-gradient(to bottom right,#ffffa9,#ee82ee)",
        }}>
        <Education />
      </div>
      <div ref={suggRef}
        style={{
          backgroundImage: "linear-gradient(to bottom right, #bcd7fc, #e2eb77)",
          height: 650,
        }}
      >
        <Contact />
      </div>
      <div style={{
        backgroundImage: "linear-gradient(to bottom right, #3c3c3c, #f0f0f0)",
        overflowX: "hidden",
        top: 0,
        left: 0
      }}>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App
