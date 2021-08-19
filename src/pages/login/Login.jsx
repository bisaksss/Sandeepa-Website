import "./login.scss";

export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <a href="#home" className="logo">SANDEEPA</a>            
                </div>
            </div>

            <div className="container">

                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone number" />
                    <input type="password" placeholder="password" />
                    <button className="loginButton">Sign In</button>
                    <span>Are you new ? <b>Sign Up now</b></span>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provi</h5>
                </form>

            </div>


            
        </div>
    )
}
