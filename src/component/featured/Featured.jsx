import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ typez }) {
    return (
        <div className="featured">

            {typez && (
                <div className="catogory">
                         <span>{typez === "cinemantic" ? "Cinemantic" : "Relax" }</span>
            
                        <select name="genre" id="genre">
                            <option >Select</option>
                            <option value="test1">test1</option>
                            <option value="test2">test2</option>
                            <option value="test3">test3</option>
                            <option value="test4">test4</option>
                            <option value="test5">test5</option>
                        </select>

                </div>
           
            )}
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
