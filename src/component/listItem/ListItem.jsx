import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({indexList}) {

    const [isHovered,setIsHoverd]=useState(false);


    return (
        <div className="listItem" 

         style={{ left : isHovered && indexList * 225 - 50 + indexList * 2.5}}
         onMouseEnter={()=>setIsHoverd(true)} 
         onMouseLeave={()=>setIsHoverd(false)}
         
         >
           <img src="assets/listImg.jpg" alt="" />

        <div className="iteamInfo">

            <div className="icons">

                <PlayArrow/>

                <Add/>

                <ThumbUpOutlined/>

                <ThumbDownOutlined/>

            </div>

            <div className="itemInfoTop">
                <span>30 min</span>
                <span className="limit">18+</span>
                <span>2020</span>
            </div>

            <div className="discription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Accusamus aperiam doloremque dolor placeat 
            </div>
            <div className="genre">Action</div>
        </div>

        </div>
    )
}
