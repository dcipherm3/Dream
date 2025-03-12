import VideoComponent from "../components/VideoComponent";

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

                <div className="auth-container flex-col w-140 h-140 justify-center items-center bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold">Login</h1>

                    <form className="loginForm flex flex-col justify-center items-center w-100 pb-10 gap-4">
                        {/* Email Input with Emoji */}
                        <div className="relative w-full">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">📧</span>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full p-4 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                                required 
                            />
                        </div>

                        <div className="h-2"></div>

                        {/* Password Input with Emoji */}
                        <div className="relative w-full">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔑</span>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full p-4 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                                required 
                            />
                        </div>
                        
                        <div className="flex justify-center items-center gap-33">
                            <label className="flex items-center space-x-2 text-white">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                <span>Remember Me</span>
                            </label>

                            <a href="#forgot-password" className="forgot-password text-sm mt-2 self-end hover:underline">
                                Forgot Password?
                            </a>
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
            </div>
        </section>
    );
}

export default Homecontent;
