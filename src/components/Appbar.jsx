import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import divy2Pic from "../assets/divy2.png";

function Appbar() {
  return (
    <div style={{ zIndex: 1 }}>
      <Grid container>
        <Grid item lg={4} md={4} sm={12}>
          <div style={{ marginLeft: 7 }}>
            <Button variant="text">
              <Avatar
                alt="Divy"
                src={divy2Pic}
                sx={{ width: 39, height: 39 }}
              />
            </Button>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 style={{ fontSize: "1.4rem" }}>THE WAY I AM</h3>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={12}>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <div style={{ marginRight: 7, display: "flex" }}>
              <Button variant="text" style={{ fontSize: "0.9rem" }}>
                Home
              </Button>
              <Button
                variant="text"
                style={{ fontSize: "0.9rem", marginLeft: 5 }}
              >
                About
              </Button>
              <Button
                variant="text"
                style={{ fontSize: "0.9rem", marginLeft: 5 }}
              >
                Suggestion
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Appbar;
