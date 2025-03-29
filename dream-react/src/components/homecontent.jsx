// Components
import { useState } from "react";
import eyeOpened from "../assets/images/icons/showpassword.png";
import eyeClosed from "../assets/images/icons/hidepassword.png";
import VideoComponent from "../components/VideoComponent";
import FlipCard from "../components/FlipCard";
import useParallax from "./useParallax";
// Assets
import emailIcon from "../assets/images/icons/email.png";
import hidepassIcon from "../assets/images/icons/hidepassword.png";
import keylockIcon from "../assets/images/icons/door-key.png";
import ctcIcon from "../assets/images/icons/contact-us.png";
import userIcon from "../assets/images/icons/username.png";
import notiIcon from "../assets/images/icons/notification.png";
import windowsIconOS from "../assets/images/operatingsystem/windowsOS.png";
import macIconOS from "../assets/images/operatingsystem/macOS.png";
import linuxIconOS from "../assets/images/operatingsystem/linuxOS.png";

import cardimg1 from "../assets/images/cardimg/dreamtree.png";
import cardimg2 from "../assets/images/cardimg/rewards.png";
import cardimg3 from "../assets/images/cardimg/community.jpg";
import launchIllustration from "../assets/images/to-the-stars.svg";

import searchiconlocation from "../assets/images/icons/search-location.png";
import arrow from "../assets/images/icons/arrow.png";
import warningicon from "../assets/images/icons/warning.png";
import caticon from "../assets/images/icons/cat.png";


function Homecontent({regToggleValue}) {

    const [isVisible, setIsVisible] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const sectionsRef = useParallax();

    return (
        <div>

        <VideoComponent/>

        {/* Section 1 */}
        <section 
        ref={(el) => (sectionsRef.current[1] = el)}
        className="parallax-section section-1 flex-wrap flex flex-col justify-center h-[calc(100vh-6rem)] mt-15 overflow-hidden" id="sectionBox"> 
            <div className={`flex relative items-center justify-evenly w-full -righto-[48vw] ${regToggleValue ? "translate-x-[0vw]" : "translate-x-[50vw]"} transition-all duration-700`}> 
                
                <div id="welcomeSection" className="softwaredl bg-black/75 backdrop-blur-md border-transparent border-2 rounded-2xl py-12 px-24 h-fit">
                    <div className="flex flex-col items-center ">
                        <h1 className="pb-8" >Dream</h1>
                        <h2 className="pb-8">A software that touches a human's dream</h2>
                        <a className="relative border-2 border-white rounded-full pt-[calc(0.75rem+2px)] pb-3 px-12 transition-all cursor-pointer">Make it happen</a>

                    </div>
                </div>



                <div id="login&registration" className="credSection relative bg-black/75 backdrop-blur-md border-transparent border-2 rounded-2xl w-160 h-[75vh]">
                    <div id="login" className={`absolute flex flex-col items-center py-8 px-18 h-full w-full transition-all duration-700 ${isLogin ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0 pointer-events-none"} `}>
                        <h2 className="mb-4">Login</h2>

                        <form action="" className="w-full h-full flex flex-col justify-between">
                            <div>
                                <inputCloset className="relative flex flex-row bg-white rounded-md mb-12 overflow-hidden">
                                    <img src={emailIcon} alt="" className="size-5 m-4" />
                                    <input type="text" placeholder="Email" className="w-full pr-4" />
                                </inputCloset>
                                <inputCloset className="relative flex flex-row bg-white rounded-md mb-4 overflow-hidden">
                                    <img src={eyeClosed} alt="" className="size-5 m-4 cursor-pointer" />
                                    <input type="password" placeholder="Password" className="w-full pr-4"/>
                                </inputCloset>
                                <div className="flex flex-row justify-between">
                                    <div className="flex">
                                        <input type="checkbox" className="mr-2"/>
                                        <p>Remember me</p>
                                    </div>
                                    <div>
                                        <a href="" className="transition-all duration-400"><p>Recovery password?</p></a>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center mt-8 ">
                                    <a className="cursor-pointer border-2 border-white rounded-full pt-[calc(0.75rem+2px)] pb-3 text-center w-1/2 transition-colors duration-400 hover:bg-white">Login</a>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <p className="pr-1">Haven’t made an account?</p><a className="transition-all duration-400 cursor-pointer" onClick={() => setIsLogin(!isLogin)}><p>Register now</p></a>
                            </div>
                        </form>
                    </div>

                    <div id="register" className={` absolute flex flex-col items-center py-8 px-18 h-full transition-all duration-700 ${isLogin ? "translate-y-[-50px] opacity-0 pointer-events-none " : "translate-y-0 opacity-100 "}`}>
                        <h2 className="">Register</h2>

                        <form action="" className="w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="flex flex-row gap-4">
                                    <inputCloset className="relative flex flex-row bg-white rounded-md mb-10 overflow-hidden w-1/2">
                                        <img src={emailIcon} alt="" className="size-5 m-4" />
                                        <input type="text" placeholder="Username" className="w-full pr-4" />
                                    </inputCloset>
                                    <inputCloset className="relative flex flex-row bg-white rounded-md mb-10 overflow-hidden w-1/2">
                                        <img src={userIcon} alt="" className="size-5 m-4" />
                                        <input type="text" placeholder="Email" className="w-full pr-4" />
                                    </inputCloset>
                                </div>

                                <inputCloset className="relative flex flex-row bg-white rounded-md mb-10 overflow-hidden">
                                        <img src={keylockIcon} alt="" className="size-5 m-4" />
                                        <input type="password" placeholder="Password" className="w-full pr-4"/>
                                </inputCloset>

                                <inputCloset className="relative flex flex-row bg-white rounded-md mb-12 overflow-hidden">
                                        <img src={keylockIcon} alt="" className="size-5 m-4" />
                                        <input type="password" placeholder="Re-type password" className="w-full pr-4"/>
                                </inputCloset>

                                <div className="flex flex-row justify-center mt-8 ">
                                    <a className="cursor-pointer border-2 border-white rounded-full pt-[calc(0.75rem+2px)] pb-3 text-center w-1/2 transition-colors duration-400 hover:bg-white">Register</a>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <p className="pr-1">Already have an account?</p><a className="transition-all duration-400 cursor-pointer" onClick={() => setIsLogin(!isLogin)}><p>Login now</p></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2 */}
        
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="parallax-section second-section h-[120vh] w-full"
        >
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

        {/* Section 3 */}

        <section 
        ref={(el) => (sectionsRef.current[3] = el)}
        className="parallax-section third-section relative h-[120vh] w-full">
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
                        <img src={launchIllustration} alt="moonIllustration"/>  
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

        {/* Usert-profile Section */}

        <section 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="parallax-section userprofile-section relative h-[120vh] w-full">
            <div className="userprofile__wrapper">
                <div className="flex relative top-65">
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
                            <div className="uploadphoto"><img src="./src/assets/images/icons/photo.png" alt="uploadphotoicon"/></div>
                        </div>
                        <hr className="border-2 border-gray-100 rounded-md ml-4"></hr>
                        <div className="switchcontent"> 
                            <div className="switchcontent"> 
                            <div className="userpersonalinformation_wrapper grid grid-cols-[1.5fr_1fr] py-10 gap-15">
                                <div className="flex flex-col gap-10 w-full">
                                    <div className="grid grid-cols-3">
                                        <div className="flex justify-center items-center">
                                            
                                                <img className="inputicon" src="./src/assets/images/icons/username.png" alt="usericon"/>
                                            
                                            <input type="text" placeholder="username" name="username" id="username"/>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <img className="inputicon" src="./src/assets/images/icons/age.png" alt="usericon"/>
                                            <input type="number" placeholder="age" name="age" id="age" min={7} />
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <img className="inputicon" src="./src/assets/images/icons/gender.png" alt="usericon"/>
                                            <select name="gender" id="gender">
                                                <option value="" selected disabled>Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 ml-5">
                                        <div className="flex flex-col justify-center items-center relative">
                                            <div className="countrystate-container">
                                                <a href="#country" className="country" onClick={(e) => {e.preventDefault(); setDropdownVisible(!isDropdownVisible); }}> Country</a>
                                                <div className="divider"></div> 
                                                <a href="#state" className="state">State</a>
                                            </div>

                                            {/* Dropdown (Hidden by default) */}
                                            {isDropdownVisible && (
                                                <div
                                                    className={`countrystate-dropdown transform transition-all duration-300 ${
                                                    isDropdownVisible ? "opacity-100 scale-100 translate-y-2" : "opacity-0 scale-95 translate-y-0 pointer-events-none"
                                                    }`}
                                                >
                                                    {/* Search Bar */}
                                                    <div className="flex justify-center">
                                                        <div className="search-countrystate">
                                                        <img src={searchiconlocation} alt="Search" />
                                                        <input type="text" placeholder="Search country..." />
                                                        </div>
                                                    </div>

                                                    {/* Country Grid */}
                                                    <div className="grid p-3 grid-cols-4 grid-rows-4 w-full h-full justify-center items-center gap-x-5 gap-y-5 p-5">
                                                        {["Malaysia", "United States", "United Kingdom", "Japan", "Canada", 
                                                        "Germany", "France", "Australia", "India", "Brazil", "South Korea", 
                                                        "China", "Italy", "Mexico", "South Africa", "Saudi Arabia"]
                                                        .map((country, index) => (
                                                            <span key={index} className="countrystate-item text-black">{country}</span>
                                                        ))}
                                                    </div>

                                                    {/* Pagination */}
                                                    <div className="flex justify-center p-5">
                                                        <div className="pagination-container flex items-center">
                                                        <div className="previous"><img src= {arrow} alt="Previous" /></div>
                                                        <div className="pagination-item bg-indigo-500 text-white"><span>1</span></div>
                                                        <div className="pagination-item"><span>2</span></div>
                                                        <div className="pagination-item"><span>3</span></div>
                                                        <div className="next"><img src= {arrow} alt="Next" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="deletion-reminder flex items-center justify-self-center">
                                            <div className="warningicon-circle"><img src={caticon} alt="warningicon"/></div>
                                            <p>User are reminded to fill out personal information before
                                            using the launcher.</p>
                                        </div>               
                                    </div>
                                </div>
                                <div className="deleteaccount__wrapper flex flex-col">
                                    <div className="wrapper ml-7 mt-3">
                                        <div><h1>Delete account</h1></div>
                                        <div>
                                            <div className="deletion-reminder flex items-center">
                                                <div className="warningicon-circle"><img src={warningicon} alt="warningicon"/></div>
                                                <p>After making deletion request, you have one month to maintain this account.</p>
                                            </div>               
                                        </div>
                                        <div className="deletion-details">
                                            <p>To permanently erase your whole account, click the button below to get a deletion request. A reminder that the progress you have made
                                            so far will be lost. The deletion process is irreversible. </p>
                                        </div>
                                        <div className="flex justify-center pb-10"><a href="#delete" className="deleteaccountrequest">Ask for an account deletion request</a></div>
                                    </div>

                                </div>
                            </div>
                                <div className="hidden contactinfo__wrapper grid grid-cols-[0.6fr_1fr] px-10 py-10 gap-20">
                                    <div className="flex flex-col gap-10">
                                        <div className="grid grid-cols-1">
                                            <div className="input">
                                                <div className="img-placeholder">
                                                    <img className="inputicon" src="./src/assets/images/icons/email-verified.png" alt="usericon"/>
                                                </div>
                                                <input type="text" placeholder="ashleyBaddieXO@icloud.com" name="email" id="email"/>
                                            </div>
                                            <div className="input">
                                                <div className="img-placeholder">
                                                    <img className="inputicon" src="./src/assets/images/icons/telephonenumber.png" alt="usericon"/>
                                                </div>
                                                <input type="text" placeholder="Phone number" name="phoneno" id="phoneno"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden notification__wrapper px-10 py-10">
                                    <div className="flex flex-col gap-10">
                                        <div className="notification-bubble">
                                            <div className="flex justify-between items-center">
                                                <div className="img-placeholder-noti">
                                                    <img className="noti-icon" src="./src/assets/images/icons/fantasy.svg" alt="usericon"/>
                                                </div>
                                                <div className="noti-message">
                                                    <p>A new branch has grown from your <b>“Freelance Architect”</b> Dream Tree! </p>
                                                </div>
                                            </div>
                                            <div className="img-placeholder-noti">
                                                <img width={40} height={40} className="cancel-icon" src="./src/assets/images/icons/cancel.png" alt="usericon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <div className="notification-bubble">
                                            <div className="flex justify-between items-center">
                                                <div className="img-placeholder-noti">
                                                    <img className="noti-icon" src="./src/assets/images/icons/goal.svg" alt="usericon"/>
                                                </div>
                                                <div className="noti-message">
                                                    <p>You’re progressing in an excellent rate this past two weeks! You’ve completed two branch for your <b>“Freelance Architect”</b> Dream Tree so far!</p>
                                                </div>
                                            </div>
                                            <div className="img-placeholder-noti">
                                                <img width={40} height={40} className="cancel-icon" src="./src/assets/images/icons/cancel.png" alt="usericon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <div className="notification-bubble">
                                            <div className="flex justify-between items-center">
                                                <div className="img-placeholder-noti">
                                                    <img className="noti-icon" src="./src/assets/images/icons/goal-1.svg" alt="usericon"/>
                                                </div>
                                                <div className="noti-message">
                                                    <p>Uh-oh! You didn’t opened the dream app for two weeks now! you got to step up the game!</p>
                                                </div>
                                            </div>
                                            <div className="img-placeholder-noti">
                                                <img width={40} height={40} className="cancel-icon" src="./src/assets/images/icons/cancel.png" alt="usericon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <div className="notification-bubble">
                                            <div className="flex justify-between items-center">
                                                <div className="img-placeholder-noti">
                                                    <img className="noti-icon" src="./src/assets/images/icons/goal-2.svg" alt="usericon"/>
                                                </div>
                                                <div className="noti-message">
                                                    <p>Welcome to the battleground princess! we’re glad to have you on board!</p>
                                                </div>
                                            </div>
                                            <div className="img-placeholder-noti">
                                                <img width={40} height={40} className="cancel-icon" src="./src/assets/images/icons/cancel.png" alt="usericon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
