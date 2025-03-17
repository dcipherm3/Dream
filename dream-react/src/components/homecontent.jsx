
// Components
import { useState } from "react";
import eyeOpened from "../assets/images/icons/showpassword.png";
import eyeClosed from "../assets/images/icons/hidepassword.png";
import VideoComponent from "../components/VideoComponent";
import FlipCard from "../components/FlipCard";
// Assets
import emailIcon from "../assets/images/icons/email.png";
import hidepassIcon from "../assets/images/icons/hidepassword.png";
import ctcIcon from "../assets/images/icons/contact-us.png";
import userIcon from "../assets/images/icons/username.png";
import notiIcon from "../assets/images/icons/notification.png";
import windowsIconOS from "../assets/images/operatingsystem/windowsOS.png";
import macIconOS from "../assets/images/operatingsystem/macOS.png";
import linuxIconOS from "../assets/images/operatingsystem/linuxOS.png";

import cardimg1 from "../assets/images/cardimg/dreamtree.png";
import cardimg2 from "../assets/images/cardimg/rewards.png";
import cardimg3 from "../assets/images/cardimg/community.jpg";
import moonIllustration from "../assets/images/undraw_to-the-moon.svg";
import launchIllustration from "../assets/images/to-the-stars.svg";


function Homecontent() {

    const [isVisible, setIsVisible] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
        <section className="first-section relative h-[120vh] w-full">
            
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <VideoComponent />
            </div>

            <div className="h-36"></div> {/* Spacer */}

            <div className="flex justify-around items-center py-16 px-36">
                <div className="softwaredownload-container flex flex-col justify-center items-center p-6 backdrop-blur-lg shadow-lg">
                    <h1>Dream</h1>
                    <p>A software that touches human's dreams</p>
                    <a href="#downloadsoftware" className=" text-white rounded-lg hover:bg-blue-700 transition">
                        Make it happen
                    </a> 
                </div>


                {/* Zaf Login */}
                <div className="auth-container flex flex-col w-140 h-160 justify-start items-center backdrop-blur-lg shadow-lg">
                    <form className={`loginForm flex-col justify-center ${isLogin ? "flex" : "hidden"}`}>
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
                        <span>Not registered yet? <a onClick={() => setIsLogin(!isLogin)} href="#register" className="text-blue-500 text-sm mt-2 self-end hover:underline">Register?</a> </span>
                        </div>
                    </form>

                    {/* Hiqal Register */}
                    <div className="formcontent__wrapper">
                        <div className={`register-form flex-col justify-center ${isLogin ? "hidden" : "flex"}`}>
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
                                <span>Already have an account? <a onClick={() => setIsLogin(!isLogin)} href="#login">Login now</a></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            
        <div className="h-36"></div> {/* Spacer */}
        </section>

        <section className="second-section relative h-[120vh] w-full -mt-24">
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
                        <FlipCard
                        backImg={cardimg1}
                        frontTitle="Feature 1"
                        backTitle="Dream Tree"
                        backText="The dream tree is a visualization of the individual’s growth and progress in their journey to pursue their goals generated by our A.I tools."
                        />
                    </div>
                    <div className="feature">
                        <FlipCard
                        backImg={cardimg2}
                        frontTitle="Feature 2"
                        backTitle="User Rewards"
                        backText="Our platforms offers task point currency as users progresses through their journey in exchange for valuable rewards. Earn Points, 
                                    Unlock Rewards—Turn Progress into Prizes!"
                        />
                        <h1 className="we">We</h1>
                    </div> 
                    <div className="feature">
                        <h1 className="offer">Offer</h1>
                        <FlipCard
                        backImg={cardimg3}
                        frontTitle="Feature 3"
                        backTitle="Community"
                        backText="Our community offers collaborative work, progress monitor, and commemorate significant events as our users proceed toward their personal
                                     growth journey."
                        />
                        
                    </div>                      
                </div>
            </div>


            

        </section>

        <section className="third-section relative h-[120vh] w-full">
            <div className="waitlist__wrapper grid grid-cols-[1fr_1.4fr]">
                <div className="waitlist-card bg-black/40 backdrop-blur-lg rounded-lg shadow-lg">
                    <h2>Forge Your Destinity</h2>
                    <h1>Shape Your Dream</h1>
                    <p>Dream Software is the first step on your magical journey of self-discovery. Explore your entire ability with our A.I. Dream Tree, 
                        designed to help you track your progress, pick up more skills, and achieve what you desire.  
                        Whether you are starting something fresh or reviving a long-lost passion, you get tools, direction, and the little push to make dreams go true. 
                        Take control of your own story.</p>

                    <a href="#waitlist-button" className="waitlist-button rounded-lg"onClick={(e) => {e.preventDefault(); setIsPopupOpen(true);}}>
                        Join The Waitlist
                    </a>
                </div>
                <div className="hidden features-offered grid grid-cols-3">
                    <div className="feature">
                        <h1 className="what">What</h1>
                        <FlipCard
                        backImg={cardimg1}
                        frontTitle="Feature 1"
                        backTitle="Dream Tree"
                        backText="The dream tree is a visualization of the individual’s growth and progress in their journey to pursue their goals generated by our A.I tools."
                        />
                    </div>
                    <div className="feature">
                        <FlipCard
                        backImg={cardimg2}
                        frontTitle="Feature 2"
                        backTitle="User Rewards"
                        backText="Our platforms offers task point currency as users progresses through their journey in exchange for valuable rewards. Earn Points, 
                                    Unlock Rewards—Turn Progress into Prizes!"
                        />
                        <h1 className="we">We</h1>
                    </div> 
                    <div className="feature">
                        <h1 className="offer">Offer</h1>
                        <FlipCard
                        backImg={cardimg3}
                        frontTitle="Feature 3"
                        backTitle="Community"
                        backText="Our community offers collaborative work, progress monitor, and commemorate significant events as our users proceed toward their personal
                                     growth journey."
                        />
                        
                    </div>                      
                </div>
            </div>

            {/* Popup Modal */}
            <div 
                className={`popup-overlay ${isPopupOpen ? "show" : ""}`} 
                onClick={() => setIsPopupOpen(false)}>
                <div className={`popup-content ${isPopupOpen ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-end">
                        <a href="#close" onClick={() => setIsPopupOpen(false)}>✖</a>   
                    </div>
                    <div className="flex">
                        <img src={launchIllustration} alt="moonIllustration" />
                        <div className="popup-form flex flex-col">
                            <h1>Join Our Waitlist</h1>
                            <h2>Enter your email to get notified when we launch!</h2>
                            <div className="grid grid-cols-1">
                                <input type="text" placeholder="Enter Your Email Address" name="email" id="email" />
                            </div>
                            <button className="newsletter-popup">Step Closer to Your Dream</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="userprofile-section relative h-screen w-full">
            <div className="userprofile__wrapper">
                <div className="flex relative top-40">
                    <div className="userprofile-sidebar w-1/5">
                        {/* User Profile sidebar */}
                        <h1>User Profile Management</h1>
                        <div className="userprofile-items flex flex-col gap-5">
                            <button className="userprofile-links flex items-center gap-2 p-2 rounded-md">
                                <img src={userIcon} alt="User Icon" className="w-5 h-5"/>
                                <span className="profile">Profile Information</span>
                            </button>

                            <button className="userprofile-links flex items-center gap-2 p-2 rounded-md">
                                <img src={ctcIcon} alt="Contact Icon" className="w-5 h-5"/>
                                <span className="contactinformation">Contact Information</span>
                            </button>

                            <button className="userprofile-links flex items-center gap-2 p-2 rounded-md">
                                <img src={notiIcon} alt="Notifications Icon" className="w-5 h-5"/>
                                <span className="logout">Notifications</span>
                            </button>
                        </div>
                    </div>
                    <div className="userprofile-content w-360 px-3">
                        {/* User Profile Content */}
                        <div><h1 className="px-7 text-white">Personal Information</h1></div>
                        <hr className="border-2 border-gray-100 rounded-md ml-4"></hr>
                        <div className="userprofilepic">
                            <img src="./src/assets/images/userimage/asianhuzz.jpg" alt="userprofile" />
                            <div className="uploadphoto"><img src="./src/assets/images/icons/photo.png" alt="uploadphotoicon" /></div>
                        </div>
                        <hr className="border-2 border-gray-100 rounded-md ml-4"></hr>
                        <div className="grid grid-cols-2"></div>
                    </div>
                </div>
            </div>





            <div className="hidden contactinformation__wrapper">
                <div className="contactinformation-content">
                    <h1>Contact Information</h1>
                    <p>For more information, please contact us at:</p>
                    <p>Email:</p>
            </div>
            </div>

        </section>

    
    </div>
        
    );
}

export default Homecontent;
