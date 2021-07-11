import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navBar.scss";

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="container">
                <div className="left">
                        <a href="#home" className="logo">SANDEEPA</a>
                        <span>Home</span>
                        <span>Cinemantic</span>
                        <span>Relax</span>
                        <span>New and Popular</span>
                        <span>My List</span>

                </div>
                <div className="right">
                        <Search className="icon"/>
                        <span>KID</span>
                        <Notifications className="icon"/>
                        <img src="assets/sandeepa.jpg" alt="" />

                        <div className="profile">
                            <ArrowDropDown className="icon"/>
                            <div className="options">
                                <span>Settings</span>
                                <span>LogOut</span>
                            </div>
                          
                        </div>
                       
                </div>
            </div>
        </div>
    )
}
