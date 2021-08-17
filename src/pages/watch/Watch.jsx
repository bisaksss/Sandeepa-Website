import { ArrowBack } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBack/>
                Home
            </div>
            <video src="assets/videotest.mp4" className="video" autoPlay progress controls ></video>
        </div>
    )
}
