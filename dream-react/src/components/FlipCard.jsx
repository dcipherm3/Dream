import { useState } from "react";

function FlipCard({ frontTitle, backImg, backTitle, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="h-90 w-65 [perspective:1000px] cursor-pointer hover:scale-105 transition-transform duration-500"
            onClick={handleFlip}
        >
            <div
                className={`relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
            >
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center p-4 [backface-visibility:hidden]">
                    <h1 className="text-lg font-bold">{frontTitle}</h1>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full bg-gray-800 text-white shadow-lg rounded-2xl flex flex-col justify-center items-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img src={backImg} alt="Card image" className="w-full h-30 mb-4 rounded-lg" />
                    <h1 className="text-lg font-bold">{backTitle}</h1>
                    <p className="text-md text-center">{backText}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
