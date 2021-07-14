import "./home.scss";
import NavBar from "../component/navBar/NavBar";
import Featured from "../component/featured/Featured";

export default function Home() {
    return (
        <div className="home">
        <NavBar/>
        <Featured typez="cinemantic"/>
        </div>
    )
}
