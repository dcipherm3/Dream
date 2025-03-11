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
            </div>

        </section>
    );
};

export default Homecontent;