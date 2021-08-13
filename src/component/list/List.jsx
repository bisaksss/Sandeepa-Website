import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List() {
    return (
        <div className="list">
           <span className="listTitle">Continue to watch</span>
           <div className="wrapper">
               <ArrowBackIos/>
               <div className="container">

                   <ListItem/>
               </div>
               <ArrowForwardIos/>
           </div>
        </div>
    )
}
