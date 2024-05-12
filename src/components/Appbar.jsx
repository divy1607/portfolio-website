import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import divyPhoto from '../assets/c977b6ac-e9c2-40f6-835c-1ce07dc571ac.jpg';


function Appbar() {


    return <div style={{

        zIndex: 1
    }}>
        <Grid container>
            <Grid item lg={4} md={4} sm={12}>

                <div style={{ marginLeft: 10 }} >
                    <Button
                       
                        variant={"text"}
                    > <Avatar alt="Divy"
                        src={divyPhoto}
                        sx={{ width: 56, height: 56 }} /> </Button>
                </div>

            </Grid>

            <Grid item lg={4} md={4} sm={12}>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <h2>
                        THE WAY I AM
                    </h2>
                </div>
            </Grid>

            <Grid item lg={4} md={4} sm={12}>
                <div style={{
                    display: "flex",
                    justifyContent: "right",
                }}>
                    <div style={{ justifyContent: "right", marginRight: 10, display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                            <Button
                                
                                variant={"text"}

                            > <h4>Home</h4></Button>
                        </div>

                        <div style={{ marginRight: 10 }}>
                            <Button
                               
                                variant={"text"}
                            > <h4>About</h4></Button>
                        </div>

                        <Button
                            variant={"text"}

                        > <h4>Suggestion</h4></Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
}

export default Appbar;