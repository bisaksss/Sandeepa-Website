import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
               <Link to="/" className="linkStyle">
               
               <ArrowBack/>
                Home

                </Link> 
            </div>
            <video src="assets/videotest.mp4" className="video" autoPlay progress controls ></video>
        </div>
    )
}
