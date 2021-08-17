import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({indexList}) {

    const trailer="assets/videotest.mp4";

    const [isHovered,setIsHoverd]=useState(false);


    return (
        <div className="listItem" 

         style={{ left : isHovered && indexList * 225 - 50 + indexList * 2.5}}
         onMouseEnter={()=>setIsHoverd(true)} 
         onMouseLeave={()=>setIsHoverd(false)}
         
         >
           <img src="assets/listImg.jpg" alt="" />
        {isHovered && (

            <>
       

           <video  autoPlay loop muted>
          <source src={trailer} type="video/mp4"></source>
            </video>

        <div className="iteamInfo">

            <div className="icons">

                <PlayArrow className="icon"/>

                <Add className="icon"/>

                <ThumbUpOutlined className="icon"/>

                <ThumbDownOutlined className="icon"/>

            </div>

            <div className="itemInfoTop">
                <span>30 min</span>
                <span className="limit">18+</span>
                <span>2020</span>
            </div>

            <div className="discription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                
            </div>
            <div className="genre">Action</div>
        </div>
        </>
         )}
        </div>
    )
}
