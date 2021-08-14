import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useRef } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List() {
    const[isMoved,setIsMoved]=useState(false);
    const [slideNumber , setSlideNumber] = useState(0);

    const listRef=useRef();


    const handleClick = (direction)=>{
        setIsMoved(true);
        let distance=listRef.current.getBoundingClientRect().x - 50;

        if (direction === "left" && slideNumber > 0)
        {
            setSlideNumber(slideNumber -1 );
            listRef.current.style.transform = `translateX(${ distance + 230 }px)`;
        }

        if (direction === "right" && slideNumber < 5)
        {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${ distance - 230 }px)`;
        }

        //console.log(distance);

    }


    return (
        <div className="list">
           <span className="listTitle">Continue to watch</span>
           <div className="wrapper">
               <ArrowBackIos className="slideArrow left" onClick={()=>handleClick("left")} style={{display:!isMoved && "none"}}/>
               <div className="container" ref={listRef} >

                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   
               </div>
               <ArrowForwardIos className="slideArrow right" onClick={()=>handleClick("right")}/>
           </div>
        </div>
    )
}
