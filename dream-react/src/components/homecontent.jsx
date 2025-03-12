import VideoComponent from "../components/VideoComponent";
import emailIcon from "../assets/images/icons/email.png";
import passIcon from "../assets/images/icons/showpassword.png";

function Homecontent() {
    return (
        <section className="first-section absolute top-0 left-0 right-0 bottom-0">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <VideoComponent />
            </div>

            <div className="software-form__wrapper absolute flex justify-center items-center space-x-14">
                <div className="softwaredownload-container flex flex-col justify-center items-center p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold">Dream</h1>
                    <p>A software that touches human's dreams</p>
                    <a href="#downloadsoftware" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Make it happen
                    </a>
                </div>


                {/* Zaf Login */}
                <div className="auth-container flex flex-col w-140 h-140 justify-center items-center bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold">Login</h1>

                    <form className="loginForm flex flex-col justify-center">
                        {/* Email Input with Emoji */}
                        <div className="grid grid-cols-1 relative">
                            <span className="authIcons">
                                <img src={emailIcon} alt="Email Icon"/>
                            </span>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required 
                            />
                        </div>

                        <div className="h-2"></div>

             
                        <div className="grid grid-cols-1 relative w-full">
                            <span className="authIcons">
                                <img src={passIcon} alt="Password Icon"/>
                            </span>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                required 
                            />
                        </div>
                        
                        <div className="remForgor grid grid-cols-2 justify-center items-center"> 
                            <div className="justify-self-start">
                            <label className="flex items-center text-white">
                                <input type="checkbox" className="checkbox-remember mb-1 accent-blue-600" />
                                <span className="pl-2">Remember Me</span>
                            </label>
                            </div>
                            <div className="justify-self-end">
                            <a href="#forgot-password" className="forgot-password text-sm hover:underline">
                                Forgot Password?
                            </a>
                            </div>
                        </div>

                        
                        <a href="#submit-login" className="submit-login text-white rounded-lg flex justify-center items-center self-center">
                            Login
                        </a>
                    </form>

                    <div className="flex justify-center items-center -mb-10">
                        <span>Not registered yet?</span>
                        <a href="#register" className="register text-blue-500 text-sm mt-2 self-end hover:underline">
                                Register?
                        </a>
                    </div>
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
        </section>
    );
}

export default Homecontent;
