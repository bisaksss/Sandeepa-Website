import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured() {
    return (
        <div className="featured">
            <img src="assets/cover.jpg" alt="" />

            <div className="info">
                <img src="assets/testlogo.png" alt="" />

                <span className="discription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur deleniti, nemo aliquid porro, dolores, 
                    error enim minima expedita magni itaque molestias? Atque, fugiat! Commodi, hic mollitia. Tempore modi veniam 
                    ratione!</span>

                    <div className="buttons">

                        <button className="play">
                            <PlayArrow/>

                            <span>Play</span>

                        </button>

                        <button className="moreInfo">

                            <InfoOutlined/>

                            <span>Info</span>

                        </button>
                    </div>
            </div>
        </div>
    )
}
