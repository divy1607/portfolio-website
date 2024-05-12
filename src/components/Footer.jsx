import fbPic from "../assets/facebook.png"
import gitPic from "../assets/github-mark.png"
import linkedPic from "../assets/icons8-linkedin-50.png"
import xPic from "../assets/x.png";
import { Badge } from "@mui/material"

function Footer() {
    return <div style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        bottom: "0",
    }}>
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Facebook />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Git />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <LinkedIn />
                </Badge>
            </div>
            <Badge color="secondary">
                <X />
            </Badge>
        </div>


    </div>
}

function Facebook() {
    return <a href="https://www.facebook.com/profile.php?id=100018304062168" target="_blank"><img src={fbPic} alt="Facebook" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function Git() {
    return <a href="https://github.com/divy1607" target="_blank"><img src={gitPic} alt="GitHub" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function LinkedIn() {
    return <a href="https://www.linkedin.com/in/divyansh-tripathi-7a1141242/" target="_blank"><img src={linkedPic} alt="linkedIn" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function X() {
    return <a href="https://twitter.com/sadandmad101" target="_blank"><img src={xPic} alt="twitter" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

export default Footer