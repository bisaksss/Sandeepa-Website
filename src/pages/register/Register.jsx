import { useRef, useState } from "react";
import "./register.scss";

export default function Register() {

    const[email,setEmail]=useState("");
    const emailRef=useRef();

    const initializeEmail=()=>{
        setEmail(emailRef.current.value);
    }

    const[password,setPassword]=useState("");
    const passwordRef=useRef();

    const initializePassword=()=>{
        setPassword(passwordRef.current.value);
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <a href="#home" className="logo">SANDEEPA</a>
                    <button className="loginButton">Sign In</button>
                </div>
              
            </div>

            <div className="container">
                <h1>Lorem ipsum dolor sit amet consectetur, 
                    
                </h1>

                <h3>adipisicing elit. Error nemo recusandae fugit itaqu</h3>

                <p>Bisak sampath</p>
                {!email ? (
                     <div className="input">
                        <input type="email" placeholder="Email Address" ref={emailRef}/>
                        <button className="regiterButton" onClick={initializeEmail}>Get Started</button>
                    </div>

                ) : (

                    <div className="input">
                        <input type="password" placeholder="Password" ref={passwordRef}/>
                        <button className="regiterButton" onClick={initializePassword}>Start</button>
                    </div>
                )}
               
            </div>
            
        </div>

    )
}
