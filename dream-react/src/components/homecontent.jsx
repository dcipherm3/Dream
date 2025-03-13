
// Components
import VideoComponent from "../components/VideoComponent";
// Assets
import emailIcon from "../assets/images/icons/email.png";
import hidepassIcon from "../assets/images/icons/hidepassword.png";
import windowsIconOS from "../assets/images/operatingsystem/windowsOS.png";
import macIconOS from "../assets/images/operatingsystem/macOS.png";
import linuxIconOS from "../assets/images/operatingsystem/linuxOS.png";
import cardimg1 from "../assets/images/cardimg/dreamtree.png";
import cardimg2 from "../assets/images/cardimg/rewards.png";
import cardimg3 from "../assets/images/cardimg/community.jpg";

function Homecontent() {
    return (
        <div>
        <section className="hidden first-section absolute top-0 left-0 right-0 bottom-0">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <VideoComponent />
            </div>

            <div className="software-form__wrapper absolute flex justify-center items-center space-x-14">
                <div className="softwaredownload-container flex flex-col justify-center items-center p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
                    <h1>Dream</h1>
                    <p>A software that touches human's dreams</p>
                    <a href="#downloadsoftware" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Make it happen
                    </a>
                </div>


                {/* Zaf Login */}
                <div className="auth-container flex flex-col w-140 h-140 justify-center items-center bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
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
                                <img src={hidepassIcon} alt="Password Icon"/>
                            </span>
                            <input type="password" placeholder="Password" required/>
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
        </section>
        <section className="second-section absolute top-0 left-0 right-0 bottom-0">
            <div className="product__wrapper grid grid-cols-[1fr_1.4fr]">
                <div className="product-introduction">
                    <h1>A Dream Tracking software</h1>
                    <p>At Dream Software, we believe everyone should have the opportunity to follow their dreams or guide those who are still uncertain.  Our platform offers 
                        AI-optimized tools will generate your very own Dream Tree and guide you through detailed measures to aid your challenging journey.</p>
                    
                    <span className="quote">“ Grow Your Dreams, Step by Step. “</span>

                    <div className="operatingsystems grid grid-cols-3 items-center justify-center">
                        <img src= {windowsIconOS} alt="windowsIconOS" />
                        <img src= {macIconOS} alt="macIconOS" />
                        <img src= {linuxIconOS} alt="linuxIconOS" />
                    </div>
                </div>
                <div className="features-offered grid grid-cols-3">
                    <div className="feature">
                        <h1 className="what">What</h1>
                        <div className="card">
                            <div className="cardimg">
                                <img src= {cardimg1} alt="card image"/>
                            </div>
                            <div className="cardcontent flex flex-col justify-center items-center">
                                <h1>Dream Tree</h1>
                                <p>The dream tree is a visualization of the individual’s growth and progress in their journey to pursue their goals generated by our 
                                    A.I tools.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="card">
                            <div className="cardimg">
                                <img src={cardimg2} alt="card image"/>
                            </div>
                            <div className="cardcontent flex flex-col justify-center items-center">
                                <h1>Rewards</h1>
                                <p>Our platforms offers task point currency as users progresses through their journey in exchange for valuable rewards. Earn Points, 
                                    Unlock Rewards—Turn Progress into Prizes! </p>
                            </div>
                        </div>
                        <h1 className="we">We</h1>
                    </div>
                    <div className="feature">
                        <h1 className="offer">Offer</h1>
                        <div className="card">
                            <div className="cardimg">
                                <img src={cardimg3} alt="card image"/>
                            </div>
                            <div className="cardcontent flex flex-col justify-center items-center">
                                <h1>Community</h1>
                                <p>Our community offers collaborative work, progress monitor, and commemorate significant events as our users proceed toward their personal
                                     growth journey.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


            

        </section>
        </div>
    );
}

export default Homecontent;
