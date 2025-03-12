import VideoComponent from "../components/VideoComponent";

function Homecontent(){
    return (
        <section className="first-section absolute top-0 left-0 right-0 bottom-0">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <VideoComponent />
            </div>
            <div className="software-form__wrapper absolute flex justify-center items-center">
                <div className="softwaredownload-container flex flex-col justify-center items-center">
                    <h1> Dream</h1>
                    <p>A software that touch human's dream</p>
                    <a href="#downloadsoftware">Make it happen</a>
                </div>
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
};

export default Homecontent;