import { useState } from "react";
import eyeOpened from "../assets/images/icons/showpassword.png";
import eyeClosed from "../assets/images/icons/hidepassword.png";
import emailIcon from "../assets/images/icons/email.png";
import VideoComponent from "../components/VideoComponent";


function Homecontent() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="absolute top-0 left-0 right-0 bottom-0">
            
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <VideoComponent />
            </div>

            <div className="h-36"></div> {/* Spacer */}

            <div className="flex justify-around items-center py-24 px-36">
                <div className="softwaredownload-container flex flex-col justify-center items-center p-6 backdrop-blur-lg shadow-lg">
                    <h1>Dream</h1>
                    <p>A software that touches human's dreams</p>
                    <a href="#downloadsoftware" className=" text-white rounded-lg hover:bg-blue-700 transition">
                        Make it happen
                    </a> 
                </div>


                {/* Zaf Login */}
                <div className="auth-container flex flex-col w-140 h-140 justify-center items-center backdrop-blur-lg shadow-lg">
                    <form className="loginForm flex flex-col justify-center">
                        <h1>Login</h1>
                        <div className="grid grid-cols-1 relative">
                            <span className="authIcons">
                                <img src={emailIcon} alt="Email Icon"/>
                            </span>
                            <input type="email" placeholder="Email" required/>
                        </div>
                        
                        <div className="grid grid-cols-1 relative w-full">
                            <span className="authIcons">
                                <img 
                                    src={isVisible ? eyeOpened : eyeClosed} 
                                    alt="Toggle Password" 
                                    className="hover:cursor-pointer"
                                    onClick={() => setIsVisible(!isVisible)}
                                />
                            </span>
                            <input type={isVisible ? "text" : "password"} placeholder="Password" required/>
                        </div>
                        
                        <div className="remForgor grid grid-cols-2 justify-center items-center"> 
                            <div className="justify-self-start">
                            <label className="flex items-center text-white">
                                <input type="checkbox" className="checkbox-remember mb-1 accent-blue-600" />
                                <span className="pl-2">Remember Me</span>
                            </label>
                            </div>
                            <div className="justify-self-end">
                            <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
                            </div>
                        </div>

                        <a href="#submit-login" className="submit-login mt-3 text-white rounded-lg flex justify-center items-center self-center">Login</a>

                        <div className="redirectregister flex justify-center items-center mt-3">
                        <span>Not registered yet? <a href="#register" className="text-blue-500 text-sm mt-2 self-end hover:underline">Register?</a> </span>
                        </div>
                    </form>
                </div>

                
                {/* Hiqal Register */}
                <div className="form-container">
                    <div className="formcontent__wrapper">
                        <div className="register-form flex flex-col justify-center">
                            <h1>Registration</h1>
                            <div className="grid grid-cols-2">
                                <input type="text" placeholder="Username" name="username" id="username" />
                                <input type="text" placeholder="Email" name="email" id="email" />
                            </div>
                            <div className="grid grid-cols-1">
                                <input type="password" placeholder="password" name="password" id="password" />
                            </div>
                            <div className="grid grid-cols-1">
                                <input type="password" placeholder="retype-password" name="password" id="password" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <button type="submit" name="regbtn" id="regbtn">Register</button>
                                <span>Already have an account? <a href="#login">Login now</a></span>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className="h-36"></div> {/* Spacer */}

        </section>
    );
}

export default Homecontent;
