import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
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

        if (direction === "right" && slideNumber <5)
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

                    <Link to="/watch">  <ListItem indexList={0}/></Link>
                   <ListItem indexList={1}/>
                   <ListItem indexList={2}/>
                   <ListItem indexList={3}/>
                   <ListItem indexList={4}/>
                   <ListItem indexList={5}/>
                   <ListItem indexList={6}/>
                   <ListItem indexList={7}/>
                   <ListItem indexList={8}/>
                   <ListItem indexList={9}/>
                   
               </div>
               <ArrowForwardIos className="slideArrow right" onClick={()=>handleClick("right")}/>
           </div>
        </div>
    )
}
